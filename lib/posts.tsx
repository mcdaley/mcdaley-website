//-----------------------------------------------------------------------------
// lib/posts.ts
//-----------------------------------------------------------------------------
import fs             from 'fs'
import path           from 'path'
import matter         from 'gray-matter'
import remark         from 'remark'
import html           from 'remark-html'
import { serialize }  from 'next-mdx-remote/serialize'
import { IBlogPost }  from '../interfaces/blog.interfaces'

// Define posts directory
const postsDirectory = path.join(process.cwd(), 'posts')

/**
 * Reads all of the markdown files in the /posts directory and returns
 * an array of objects w/ all of the blog metadata.
 * 
 * @function  getSortedPostsData
 * @returns   Array of blog posts sorted by descending date.
 */
export function getSortedPostsData() {
  // Get the file names in /posts
  const fileNames     = fs.readdirSync(postsDirectory)
  const allPostsData  = fileNames.map( (fileName) => {
    // Remove ".md" extension from file name to get the "id"
    const id = fileName.replace(/\.md$/, '')

    // Read the markdown file as a string
    const fullPath      = path.join(postsDirectory, fileName)
    const fileContents  = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult  = matter(fileContents)

    // Combine the metadata w/ the id
    return {
      id,
      ...(matterResult.data as {date: string, title: string})
    }
  })

  // Sort the posts by descending date in the metadata
  return allPostsData.sort( (a,b) => {
    if(a.date < b.date) {
      return 1
    }
    else {
      return -1
    }
  })
}

/**
 * Reads the markdown filenames in the "/posts" directory and returns an
 * array of objects with the filename w/o the extensions that can be used as
 * the ids for the blog posts. The returned array has the following format:
 * 
 *  [
 *    { params: {id: filename-1} },
 *    { params: {id: filename-2} }, ...
 *  ]
 * 
 * @function  getAllPostIds
 */
export const getAllPostIds = () => {
  const fileNames = fs.readdirSync(postsDirectory)
  const postIds   = fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
  return postIds
}

/**
 * Reads the markdown file contents for the specified "id", which is the
 * filename w/o the ".md" extension. The function returns the metadata 
 * and the content of the markdown converted to a HTML string.
 * 
 * @function  getPostData
 * @param     {string} - Name of markdown file w/o the ".md" extentsion
 * @returns   {IBlogPost} 
 */
export const getPostData = async (id: string) => {
  const fullPath      = path.join(postsDirectory, `${id}.md`)
  const fileContents  = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult  = matter(fileContents)

  /////////////////////////////////////////////////////////////////////////////
  // TODO: 11/11/2021
  // Rname variables for mdx so that they make more sense.
  /////////////////////////////////////////////////////////////////////////////
  // Serialize for MDXProvide
  const source   = await serialize(matterResult.content)

  // Use remark to convert markdown into HTML string
  const processedContent  = await remark().use(html).process(matterResult.content)

  // Combine the data with the id and contentHtml
  const result = {
    id,
    source,
    ...(matterResult.data as { date: string; title: string })
  }
  return result
}
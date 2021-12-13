//-----------------------------------------------------------------------------
// pages/posts/[id].ts
//-----------------------------------------------------------------------------
import Head                     from 'next/head'
import Link                     from 'next/link'
import Image                    from 'next/image'
import {
  GetStaticPaths,
  GetStaticProps,
}                               from 'next'
import { MDXRemote }            from 'next-mdx-remote'
import { useEffect, useState }  from 'react'

import Layout                   from '../../components/layout'
import Date                     from '../../components/date'
import BlogLinkList             from '../../components/blog-link-list'
import { 
  IBlogPost, 
  IBlogMetadata,
}                               from '../../interfaces/blog.interfaces'
import {
  getAllPostIds,
  getPostData,
}                               from '../../lib/posts'

/**
 * Define react components used in any of the blog post markdown
 */
const components = {
  Image
}

/**
 * @function  Post
 */
export default function Post({postData} : {postData: IBlogPost}) {

  /**
   * Retrieve the array of blog post metadata from localStorage and save in
   * the components state.
   */
  const [blogMetadata, setBlogMetadata] = useState<IBlogMetadata[] | undefined>(undefined)

  useEffect( () => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("Posts");
      const value = saved !== null ? JSON.parse(saved) : undefined;
  
      setBlogMetadata(value)
    }
  }, [postData])

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <div className="flex flex-col flex-nowrap justify-center">
        {/* Blog Post */}
        <div className="p-4">
          <div className="mb-8">
            <h1 className="text-3xl text-gray-900 font-bold">
              {postData.title}
            </h1>
            <Date dateString={postData.date} />
          </div>
          <article className="prose prose-lg">
            <MDXRemote {...postData.source} components={components} />
          </article>
        </div>

        {/* Links to previous and next blog posts */}
        <div className="p-4">
          {blogMetadata && <BlogLinkList blogMetadata={blogMetadata} blogId={postData.id} />}
        </div>

        {/* Link to home page */}
        <div className='grow-0'>
          <button className="bg-indigo-500 hover:bg-indig-800 text-white font-bold mx-4 py-2 px-4 border border-indigo-800 rounded-full">
            <Link href="/">
              <a>Home</a>
            </Link>
          </button>
        </div>
      </div>
    </Layout>
  )
}

/**
 * Builds the dynamic routes for all of the blog posts using the markdown
 * files in the "/posts" directory.
 * 
 * @function  getStaticPaths
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

/**
 * @function  getStaticProps
 */
export const getStaticProps = async ( {params} : {params: IBlogPost} ) => {
  /////////////////////////////////////////////////////////////////////////////
  // TODO: 11/08/2021
  // Also, I could not get this to work with the ": GetStaticProps" option
  // as outlined in Nextjs documentation. I specifically set the data type
  // for the "params", which seems like the right thing to do.
  /////////////////////////////////////////////////////////////////////////////
  const postData = await getPostData(params.id as string)
  return {
    props: {
      postData
    }
  }
}

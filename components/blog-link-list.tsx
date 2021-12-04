//-----------------------------------------------------------------------------
// components/blog-link-list.tsx
//-----------------------------------------------------------------------------
import {
  IBlogMetadata,
}                       from '../interfaces/blog.interfaces'
import BlogLink         from './blog-link'

/**
 * Display links to the previous and next blogs at the end of every blog
 * post.
 */
export default function BlogLinkList( {blogMetadata, blogId} : {blogMetadata: IBlogMetadata[], blogId: string}) {
  /**
   * Determine if the current blog post has a previous post. If yes then return
   * true, otherwise return false.
   */
  const hasPrevBlogPost = (index : number) : boolean => {
    if(index == 0 || blogMetadata == undefined || blogMetadata.length == 1) {
      return false
    }
    return true
  }

  /**
   * Determine if the current blog post has a next post. If yes then return 
   * true, otherwise return false.
   */
  const hasNextBlogPost = (index : number) : boolean => {
    if(blogMetadata == undefined || blogMetadata.length == 1 || (index + 1) >= blogMetadata.length) {
      return false
    }
    return true
  }

  // Find index of current blog post.
  const index : number = blogMetadata.findIndex(metadata => metadata.id == blogId)

  return (
    <div className="inline-flex flex-row flex-wrap py-2 my-2">
      {hasPrevBlogPost(index) && <BlogLink blogMetadata={blogMetadata[index - 1]} title='Previous Post' />}
      {hasNextBlogPost(index) && <BlogLink blogMetadata={blogMetadata[index + 1]} title='Next Post' />}
    </div>
  )
}
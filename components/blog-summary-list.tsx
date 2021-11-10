//-----------------------------------------------------------------------------
// components/blog-summary-list.tsx
//-----------------------------------------------------------------------------
import BlogSummary          from './blog-summary'
import {
  IBlogMetadata,
}                           from '../interfaces/blog.interfaces'

/**
 * @function BlogSummaryList
 */
export default function BlogSummaryList({ allPostsData }: { allPostsData: IBlogMetadata[] }) {
  return (
    <>
      <h1 className="text-2xl mb-4">My Awesome Blog Posts</h1>
      <ul>
        {allPostsData.map( (metadata: IBlogMetadata) => <BlogSummary metadata={metadata} />)}
      </ul>
    </>
  )
}
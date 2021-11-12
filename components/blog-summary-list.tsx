//-----------------------------------------------------------------------------
// components/blog-summary-list.tsx
//-----------------------------------------------------------------------------
import React from 'react'

/**
 * @function BlogSummaryList
 */
export default function BlogSummaryList({ children } : {children: React.ReactNode}) {
  return (
    <>
      <h1 className="text-2xl my-4">Dude, My Awesome Blog Posts</h1>
      <ul>
        {children}
      </ul>
    </>
  )
}
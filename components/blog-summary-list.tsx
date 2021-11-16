//-----------------------------------------------------------------------------
// components/blog-summary-list.tsx
//-----------------------------------------------------------------------------
import React from 'react'

/**
 * @function BlogSummaryList
 */
export default function BlogSummaryList({ children } : {children: React.ReactNode}) {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl mb-4">Dude, My Awesome Blog Posts</h1>
      <ul>
        {children}
      </ul>
    </div>
  )
}
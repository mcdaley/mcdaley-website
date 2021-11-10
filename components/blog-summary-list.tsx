//-----------------------------------------------------------------------------
// components/blog-summary-list.tsx
//-----------------------------------------------------------------------------
import React from 'react'

///////////////////////////////////////////////////////////////////////////////
// TODO: 11/10/2021
// Figure out what "type" to use for children instead of "any"
///////////////////////////////////////////////////////////////////////////////

/**
 * @function BlogSummaryList
 */
export default function BlogSummaryList({ children } : {children: any}) {
  return (
    <>
      <h1 className="text-2xl my-4">Dude, My Awesome Blog Posts</h1>
      <ul>
        {children}
      </ul>
    </>
  )
}
//-----------------------------------------------------------------------------
// components/blog-summary.tsx
//-----------------------------------------------------------------------------
import Link               from 'next/link'
import Image              from 'next/image'

import Date               from './date'
import { IBlogMetadata }  from '../interfaces/blog.interfaces'

/**
 * @function  BlogSummary
 */
export default function BlogSummary({metadata} : {metadata: IBlogMetadata}) {
  return (
    <li key={metadata.id}>
      <div className="p-4 mb-5 w-full flex flex-col bg-gray-200">
        <p className="text-gray-600">
          <Date dateString={metadata.date} />
        </p>
        <h2 className="text-2xl mb-2">
          <Link href={`/posts/${metadata.id}`}>
            <a className="hover:underline hover:text-blue-700">{metadata.title}</a>
          </Link>
        </h2>
        <p className="text-gray-800 text-base">
          {metadata.excerpt}
        </p>
      </div>
    </li>
  )
}
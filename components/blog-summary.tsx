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
    <li key={metadata.id} className="group">
      <Link href={`/posts/${metadata.id}`}>
        <a>
          <div className="flex flex-row p4 mb-5 bg-purple-200">
            <div>
              <Image
                src     = {`/${getCoverImage(metadata)}`}
                alt     = "Blog post cover"
                width   = {128}
                height  = {128}
              />
            </div>
            <div className="p-4 pt-2 w-full flex flex-col bg-gray-200 group-hover:bg-yellow-300">
              <p className="text-gray-600">
                <Date dateString={metadata.date} />
              </p>
              <h2 className="text-2xl mb-2 group-hover:underline">{metadata.title}</h2>
              <p className="text-gray-800 text-base">
                {metadata.excerpt}
              </p>
            </div>
          </div>
        </a>
      </Link>
    </li>
  )
}

/**
 * Return the name of the metadata.cover field if it is defined, otherwise
 * return the name of the default blog post cover image.
 * 
 * @function getCoverImage
 */
const getCoverImage = (metadata: IBlogMetadata) : string => {
  return metadata.cover || `record-player.jpg`
}
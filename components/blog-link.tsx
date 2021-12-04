//-----------------------------------------------------------------------------
// components/blog-link.tsx
//-----------------------------------------------------------------------------
import Link                 from 'next/link'
import { IBlogMetadata }    from "../interfaces/blog.interfaces";

/**
 * Returns component to display the previous/next links at the end of a blog
 * post.
 * 
 * @function BlogLink
 */
export default function BlogLink({blogMetadata, title } : {blogMetadata : IBlogMetadata, title: string}) {
  return (
    <div className="w-1/2 pr-8 group">
      <h3 className="text-gray-600 text-sm">
        {title}
      </h3>
      <Link href={`/posts/${blogMetadata.id}`}>
        <a>
          <div>
            <h1 className="text-base text-gray-900 group-hover:underline">
              {blogMetadata.title}
            </h1>
            <p className="text-gray-800 text-sm group-hover:text-gray-400 group-hover:underline">
              {blogMetadata.excerpt}
            </p>
          </div>
        </a>
      </Link>
    </div>
  )
}
//-----------------------------------------------------------------------------
// pages/index.tsx
//-----------------------------------------------------------------------------
import type { 
  NextPage,
  GetStaticProps,
}                         from 'next'
import Head               from 'next/head'
import Image              from 'next/image'
import Link               from 'next/link'

import { 
  getSortedPostsData, 
}                         from '../lib/posts'
import { 
  IBlogMetadata,
}                         from '../interfaces/blog.interfaces'
import Layout             from '../components/layout'
import Date               from '../components/date'
import BlogSummaryList    from '../components/blog-summary-list'
import BlogSummary        from '../components/blog-summary'

/**
 * @function getStaticProps
 * @returns  An array of all the blog post data as properties for the Home component
 */
 export const getStaticProps: GetStaticProps = async () => {
  const  allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

/**
 * @function  Home
 * @returns 
 */
export default function Home({ allPostsData }: { allPostsData: IBlogMetadata[] }) {
  return (
    <Layout>
      <div className="px-4">
        <Head>
          <title>Mike Daley Website</title>
          <meta name="description" content="Home page" />
        </Head>

        <div>
          <BlogSummaryList>
            {allPostsData.map( (metadata) => {
              return (
                <BlogSummary key={metadata.id} metadata={metadata} />
              )
            })}
          </BlogSummaryList>
        </div>
      </div>
    </Layout>
  )
}


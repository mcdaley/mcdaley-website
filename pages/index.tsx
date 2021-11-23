//-----------------------------------------------------------------------------
// pages/index.tsx
//-----------------------------------------------------------------------------
import type { 
  GetStaticProps,
}                         from 'next'
import Head               from 'next/head'

import { 
  getSortedPostsData,
}                         from '../lib/posts'
import { 
  IBlogMetadata,
}                         from '../interfaces/blog.interfaces'
import Layout             from '../components/layout'
import BlogSummaryList    from '../components/blog-summary-list'
import BlogSummary        from '../components/blog-summary'
import Sidebar            from '../components/sidebar'
import ContactMobile      from '../components/contact-mobile'

/**
 * @function getStaticProps
 * @returns  An array of all the blog post data as properties for the Home component
 */
 export const getStaticProps: GetStaticProps = async () => {
  const  allPostsData = getSortedPostsData()
  console.log(`[debug] All Post Data: `, allPostsData)
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

        <div className="flex flex-row my-4 divide-x-0 md:divide-x md:divide-gray-200 lg:px-16">
          <div className="hidden md:flex md:w-1/3">
            <Sidebar />
          </div>
          <div className="pl-8 flex flex-col w-full md:w-2/3">
            <ContactMobile />
            <BlogSummaryList>
              {allPostsData.map( (metadata) => {
                return (
                  <BlogSummary key={metadata.id} metadata={metadata} />
                )
              })}
            </BlogSummaryList>
          </div>
        </div>
      </div>
    </Layout>
  )
}


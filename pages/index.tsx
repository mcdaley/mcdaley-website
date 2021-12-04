//-----------------------------------------------------------------------------
// pages/index.tsx
//-----------------------------------------------------------------------------
import type { 
  NextPage,
  GetStaticProps,
}                           from 'next'
import Head                 from 'next/head'
import Image                from 'next/image'
import Link                 from 'next/link'
import { useEffect }        from 'react'

import { 
  getSortedPostsData, 
}                           from '../lib/posts'
import { 
  IBlogMetadata,
}                           from '../interfaces/blog.interfaces'
import Layout               from '../components/layout'
import Date                 from '../components/date'
import BlogSummaryList      from '../components/blog-summary-list'
import BlogSummary          from '../components/blog-summary'
import Sidebar              from '../components/sidebar'
import ContactMobile        from '../components/contact-mobile'
import { useLocalStorage }  from '../lib/use-local-storage'

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
  
  /**
   * Store all of the blog post metadata in the browser's local storage, so 
   * that it can be retrieved on each specific blog post to build links to
   * the previous and next blog posts.
   */
  useEffect( () => {
    localStorage.setItem("Posts", JSON.stringify(allPostsData))
  }, [allPostsData])

  /**
   * Return the Home page
   */
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
            {/* 11/23/2021 - Turned off mobile header as it looked terrible */}
            {/* <ContactMobile /> */}
            
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


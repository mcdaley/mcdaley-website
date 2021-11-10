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
import styles             from '../styles/Home.module.css'

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
      <div className={styles.container}>
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
        
        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
      </div>
    </Layout>
  )
}


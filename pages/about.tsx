//-----------------------------------------------------------------------------
// pages/about.tsx
//-----------------------------------------------------------------------------
import type { NextPage }  from 'next'
import Link               from 'next/link'
import Head               from 'next/head'

import Layout             from '../components/layout'

/**
 * The about page
 * @returns {NextPage}
 */
const About: NextPage = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>About Mike Daley</title>
        </Head>
        <h1>About</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </Layout>
    </>
  )
}

// Export About
export default About
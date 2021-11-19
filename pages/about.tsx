//-----------------------------------------------------------------------------
// pages/about.tsx
//-----------------------------------------------------------------------------
import type { NextPage }  from 'next'
import Link               from 'next/link'
import Head               from 'next/head'

import { IJob }           from '../interfaces/about.interfaces'
import Layout             from '../components/layout'
import Personal           from '../components/about/personal'
import Jobs               from '../components/about/jobs'
import Skills             from '../components/about/skills' 

/**
 * The about page
 * @returns {NextPage}
 */
const About: NextPage = () => {
  
  /**
   * Returns a list of jobs
   */
  return (
    <>
      <Layout>
        <div className="px-4">
          <Head>
            <title>AboutMike Daley</title>
            <meta name="description" content="About page" />
          </Head>

          {/* Personal */}
          <h2 className="text-3xl pt-4 pb-2 mb-4 border-b border-gray-300">About Me</h2>
          <Personal />

          {/* Background */}
          <h2 className="text-3xl pt-4 pb-2 mb-4 border-b border-gray-300">Background</h2>
          <Jobs />

          {/* Technical Skills */}
          <h2 className="text-3xl pt-4 pb-2 mb-4 border-b border-gray-300">Technical Skills</h2>
          <Skills />
        </div>
      </Layout>
    </>
  )
}

// Export About
export default About
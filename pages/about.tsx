//-----------------------------------------------------------------------------
// pages/about.tsx
//-----------------------------------------------------------------------------
import type { NextPage }  from 'next'
import Link               from 'next/link'
import Head               from 'next/head'

import { IJob }           from '../interfaces/about.interfaces'
import Layout             from '../components/layout'
import Personal           from '../components/about/personal'
import Job                from '../components/about/job'
import Skills             from '../components/about/skills' 

/**
 * The about page
 * @returns {NextPage}
 */
const About: NextPage = () => {
  /**
   * List of jobs for background.
   */
  const jobs : IJob[] = [
    {
      logo:     "/logos/careerqb-logo.png",
      title:    "VP of Product Management",
      company:  "CareerQB",
      summary:  "Founder of CareerQB.com a startup that streamlines users’ job search by aggregating job search results from multiple job search sites and by providing productivity tools to help users organize their job search.",
    },
    {
      logo:     "/logos/ews-logo.png",
      title:    "Director Product Management",
      company:  "Zelle - Early Warning Services",
      summary:  "Early Warning Services, LLC provides mobile payment and risk solutions to financial institutions. Member of the business leadership team that launched Zelle, a P2P Payment Service that has processed more than $120B in P2P payments.",
    },
    {
      logo:     "/logos/thomson-reuters-logo.png",
      title:    "Product Management",
      company:  "Thomson Reuters",
      summary:  "Responsible for launching Thomson Reuters’ Portfolio Analytics for Eikon, an online SaaS application for Investment Managers.",
    },
    {
      logo:     "/logos/yodlee-logo.png",
      title:    "Product Management",
      company:  "Yodlee",
      summary:  "Responsible for Yodlee Personal Finance Management (PFM), an online SaaS application that provides online personal finance tools to 3.5M customers at over 20 financial institutions.",
    },
  ]

  // Unique id for list of jobs
  let id = 1

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
          <ul>
            <li key={id++}>
              {jobs.map( (job) => <Job {...job} />)}
            </li>
          </ul>

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
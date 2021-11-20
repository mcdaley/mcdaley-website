//-----------------------------------------------------------------------------
// components/about/jobs.tsx
//-----------------------------------------------------------------------------
import Image      from 'next/image'
import { IJob }   from '../../interfaces/about.interfaces'

/**
 * @function Jobs
 */
export default function Jobs() {

  /**
   * List of jobs for background.
   */
  const jobs : IJob[] = [
    {
      logo:     "/logos/bbva-logo.svg",
      title:    "Product Management",
      company:  "BBVA Open Platform",
      summary:  "Product Owner for BBVA’s Banking as a Service (BaaS) API Platform. Responsible for Account and Cards APIs used for opening and managing checking and savings accounts and for issuing and managing cards.",
    }, 
    {
      logo:     "/logos/ews-logo.png",
      title:    "Product Management",
      company:  "Zelle - Early Warning Services",
      summary:  "Early Warning Services, LLC provides mobile payment and risk solutions to financial institutions. Member of the business leadership team that launched Zelle, a P2P Payment Service that has processed more than $120B in P2P payments.",
    },
    {
      logo:     "/logos/careerqb-logo.png",
      title:    "Product Management",
      company:  "CareerQB",
      summary:  "Founder of CareerQB.com a startup that streamlines users’ job search by aggregating job search results from multiple job search sites and by providing productivity tools to help users organize their job search.",
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

  /**
   * Return an array of formatted jobs.
   * @function getJobs
   */
  const getJobs = () => {
    return (
      jobs.map( (job) => {
        return (
          <li key={job.company}>
            <div className="inline-flex w-full">
              <div className="flex-none mr-4 mt-2">
                <Image
                  src       = {job.logo}
                  alt       = "Company logo"
                  width     = {64}
                  height    = {64}
                  className = "rounded-lg"
                />
              </div>
              <div className="flex-col flex-grow pb-4 mb-4">
                {/* <h2 className="text-2xl">{job.title}</h2> */}
                <h3 className="text-lg text-gray-700">{job.company}</h3>
                <p className="text-gray-800">{job.summary}</p>
              </div>
            </div>
          </li>
        )
      })
    )
  }

  /**
   * Returns list of jobs.
   */
  return (
    <ul>
      {getJobs()}
    </ul>
  )
}
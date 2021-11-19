//-----------------------------------------------------------------------------
// components/about/job.tsx
//-----------------------------------------------------------------------------
import Image      from 'next/image'
import { IJob }   from '../../interfaces/about.interfaces'

/**
 * @function Job
 */
export default function Job({logo, title, summary}: IJob) {
  return (
    <div>
      <div className="inline-flex w-full">
        <div className="flex-none mr-4 mt-2">
          <Image
            src       = {logo}
            alt       = "Company logo"
            width     = {64}
            height    = {64}
            className = "rounded-lg object-cover"
          />
        </div>
        <div className="flex-col flex-grow pb-4 mb-4">
          <h2 className="text-2xl">{title}</h2>
          <p className="text-gray-800">{summary}</p>
        </div>
      </div>
    </div>
  )
}
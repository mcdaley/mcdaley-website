//-----------------------------------------------------------------------------
// components/sidebar.tsx
//-----------------------------------------------------------------------------
import Image        from 'next/image'
import profilePic   from '../public/Mike_1970s_cartoon_005.jpg'
import Contact      from './contact'

/**
 * @function Sidebar
 */
export default function Sidebar() {
  return (
    <div className="flex flex-col mt-4 mr-10">
      <span className="mb-4 flex w-1/3 lg:w-1/5">
        <Image
          src       = {profilePic}
          alt       = "My Picture"
          className = "rounded-full"
        />
      </span>
      <h2 className="text-2xl text-gray-800 mb-4">Mike Daley</h2>
      <p className="text-base text-gray-600 mb-4">
        Connecting the dots between product management and software development
      </p>

      <Contact color={`text-blue-600`} />
    </div>
  )
}
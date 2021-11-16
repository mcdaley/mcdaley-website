//-----------------------------------------------------------------------------
// components/contact-mobile.tsx
//-----------------------------------------------------------------------------
import Image        from 'next/image'
import profilePic   from '../public/Mike_1970s_cartoon_005.jpg'

/**
 * @function ContactMobile
 */
export default function ContactMobile() {
  return (
    <div className="mb-4 md:hidden">
      <div 
        className = "inline-flex items-center w-full px-4 bg-local bg-cover h-18" 
        style     = {{backgroundImage: `url('\Binary_Blue_Bkgrd.jpg')`}}
      >
        <Image
          src       = {profilePic}
          width     = {48}
          height    = {48}
          alt       = "My Picture"
          className = "flex-none rounded-full"
        />
        <h2 className="flex-grow text-white text-xl text-left font-bold ml-8 py-4">Mike Daley</h2>
      </div>
      {/* 
        <div className="inline-flex items-center w-full px-4 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
          <Image
            src       = {profilePic}
            width     = {48}
            height    = {48}
            alt       = "My Picture"
            className = "flex-none rounded-full"
          />
          <h2 className="flex-grow text-white text-lg text-left ml-8 py-4">Michael Daley</h2>
        </div>
      */}
    </div>
  )
}
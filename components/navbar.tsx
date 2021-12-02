//-----------------------------------------------------------------------------
// components/navbar.tsx
//-----------------------------------------------------------------------------
import Link           from 'next/link'
import { useRouter }  from 'next/router'
import { useState }   from 'react'

/**
 * @function Navbar
 */
export default function Navbar() {
  const router                        = useRouter()
  const [active, setActive]           = useState(false)
  const [currentPage, setCurrentPage] = useState(router.pathname)

  /**
   * Toggle the visibility of the navigation links for the hamburger 
   * navbar menu for mobile screens. By default the hamburger menu is
   * collapsed or closed.
   */
  const handleClick = () => {
    setActive(!active)
  }

  /**
   * For each navigation link in the navbar check to see if the current page 
   * is equal to the href of the navigation link. If the href equals the
   * current page then set the link to active, so the user knows that they
   * are on that page.
   * 
   * @function  isCurrentPage
   * @params    {string} href - Target path/url for the link
   * @returns   {string} - Active or inactive link class names.
   */
  const isCurrentPage = (href: string) : string => {
    let style = 'md:inline-flex md:w-auto w-full m-2 px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-indigo-800 hover:text-white'
    
    if(currentPage === href) {
      style = 'md:inline-flex md:w-auto w-full m-2 px-3 py-2 rounded text-white bg-indigo-800 font-bold items-center justify-center'
    }
    return style
  }

  /**
   * Return the Navbar component
   */
  return (
    <>
      <nav className="flex items-center flex-wrap bg-indigo-500 p-3">
        {/* Website Logo */}
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4">
            <svg
              viewBox   = '0 0 24 24'
              xmlns     = 'http://www.w3.org/2000/svg'
              className = 'fill-current text-white h-8 w-8 mr-2'
            >
              <path d='M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z' />
            </svg>
            <span className='text-xl text-white font-bold uppercase tracking-wide'>
              MCDALEY.COM
            </span>
          </a>
        </Link>

        {/* Mobile Hamburger Menu */}
        <button 
          className = "inline-flex p-3 hover:bg-indigo-800 rounded md:hidden text-white ml-auto hover:text-white outline-none"
          onClick   = {handleClick}
        >
          <svg
            className = 'w-6 h-6'
            fill      = 'none'
            stroke    = 'currentColor'
            viewBox   = '0 0 24 24'
            xmlns     = 'http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap   = 'round'
              strokeLinejoin  = 'round'
              strokeWidth     = {2}
              d               = 'M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>

        {/* Navigation Links for mobile and desktop */}
        <div className={`${active ? '' : 'hidden'}   w-full md:inline-flex md:flex-grow md:w-auto`}>
          <div className="md:inline-flex md:flex-row md:ml-auto md:w-auto w-full md:items-center items-start  flex flex-col md:h-auto">
            <Link href='/'>
              <a className={isCurrentPage('/')}>
                Home
              </a>
            </Link>
            <Link href='/about'>
              <a className={isCurrentPage('/about')}>
                About
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}
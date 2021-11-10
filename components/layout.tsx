//-----------------------------------------------------------------------------
// components/layout.tsx
//-----------------------------------------------------------------------------
import React  from 'react'
import Head   from 'next/head'
import Link   from 'next/link'

/**
 * Layout for the application.
 * 
 * @param   {React.ReactNode}
 * @returns 
 */
export default function Layout({ children } : {children: React.ReactNode}) {
  return (
    <div className="mx-auto">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>  
      <nav className="flex justify-between bg-gray-900 text-white w-screen">
        <div className="px-5 xl:px-12 py-6 flex w-full items-center">
          <Link href="#">
            {/* <img class="h-9" src="logo.png" alt="logo"> */}
            <a className="text-3xl font-bold font-heading">Logo Here</a>
          </Link>
          <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
            <li>
              <Link href={"/"}>
                <a className="hover:text-gray-200">Home</a>
              </Link>
            </li>
            <li>
              <Link href={"/about"}>
                <a className="hover:text-gray-200">About</a>
              </Link>
            </li>
          </ul>
          {/* TODO: Header Icons */}
        </div>
      </nav>
        
      <main role="main" className="w-full sm:w-2/3 md:w-3/4 pt-1 px-2">
        {children}
      </main>
      
    </div>
  )
}
//-----------------------------------------------------------------------------
// components/layout.tsx
//-----------------------------------------------------------------------------
import React    from 'react'
import Head     from 'next/head'
import Link     from 'next/link'

import Navbar   from './navbar'

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
      <Navbar /> 
        
      <main role="main" className="w-full sm:w-2/3 md:w-3/4 pt-1 px-2">
        {children}
      </main>
      
    </div>
  )
}
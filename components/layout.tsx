//-----------------------------------------------------------------------------
// components/layout.tsx
//-----------------------------------------------------------------------------
import React    from 'react'
import Head     from 'next/head'

import Navbar   from './navbar'
import Footer   from './footer'

/**
 * Layout for the application.
 * 
 * @param   {React.ReactNode}
 * @returns 
 */
export default function Layout({ children } : {children: React.ReactNode}) {
  return (
    <div className="mx-auto">
      {/* Header Info */}
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>

      {/* Navigation */}
      <Navbar /> 
        
      {/* Main Layout */}
      <main role="main" className="w-full xl:w-3/4 py-2 px-4 md:py-4 md:px-16">
        {children}

        <Footer />
      </main>
      
    </div>
  )
}
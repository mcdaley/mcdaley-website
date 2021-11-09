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
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
      <nav>
        <ul>
          <li>
            <Link href={"/"}>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href={"/about"}>
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        {children}
      </main>
    </div>
  )
}
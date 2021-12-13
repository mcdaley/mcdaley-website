//-----------------------------------------------------------------------------
// components/footer.tsx
//-----------------------------------------------------------------------------
import Link       from 'next/link'
import Contact    from './contact'

/**
 * @function Footer
 */
export default function Footer() {
  return (
    <>
      <footer className="grid grid-cols-2 border-t border-gray-300 mt-8">
        <div id="sitemap" className="flex flex-col mx-4 my-4">
          <h3 className="text-lg text-gray-800 mb-2">Navigation</h3>
          <ul>
            <li>
              <Link href="/">
                <a className="text-gray-600 hover:underline">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
              <a className="text-gray-600 hover:underline">About</a>
              </Link>
            </li>
          </ul>
        </div>
        <div id="contact" className="flex flex-col my-4">
          <h3 className="text-lg text-gray-800 mb-2">Mike Daley</h3>
          <Contact color={`text-gray-400`} />
        </div>
      </footer>
    </>
  )
}
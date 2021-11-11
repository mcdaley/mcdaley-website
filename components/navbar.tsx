//-----------------------------------------------------------------------------
// components/navbar.tsx
//-----------------------------------------------------------------------------
import Link   from 'next/link'

/**
 * @function Navbar
 */
export default function Navbar() {
  return (
    <nav className="flex bg-gray-900 text-white w-screen">
      <div className="px-5 xl:px-12 py-6 flex w-full items-center">
        <Link href="#">
          {/* <img class="h-9" src="logo.png" alt="logo"> */}
          <a className="text-3xl font-bold font-heading">Logo Here</a>
        </Link>
        <ul className="hidden sm:flex px-4 mx-auto font-semibold font-heading space-x-12">
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
  )
}
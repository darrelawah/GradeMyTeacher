import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logomain from '../Assets/main_logo_banner.png'

export default function Navbar() {
  return (
    <nav className='header'>
    <div style={{ marginRight: 'auto' }}>
        <Link href="/">
          <Image src={logomain} alt="Logo" width={355} height={52} />
        </Link>
      </div>
      <ul>
        <li>
          <Link className='linker' href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className='linker' href="/search">
            Search
          </Link>
        </li>
        <li>
          <Link className='linker' href="/login">
            Login
          </Link>
        </li>
        <li>
          <Link className='linker' href="/profile">
            Profile
          </Link>
        </li>
        <li>
          <Link className='linker' href="/about">
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  )
}
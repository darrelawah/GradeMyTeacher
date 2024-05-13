import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logomain from '../Assets/main_logo_banner.png'

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'flex-end', backgroundColor: '#F3E3C2' }}>
    <div style={{ marginRight: 'auto' }}>
        <Link href="/">
          <Image src={logomain} alt="Logo" width={355} height={52} />
        </Link>
      </div>
      <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
        <li style={{ marginLeft: '10px' }}>
          <Link className='linker' href="/">
            Home
          </Link>
        </li>
        <li style={{ marginLeft: '10px' }}>
          <Link className='linker' href="/search">
            Search
          </Link>
        </li>
        <li style={{ marginLeft: '10px' }}>
          <Link className='linker' href="/login">
            Login
          </Link>
        </li>
        <li style={{ marginLeft: '10px' }}>
          <Link className='linker' href="/profile">
            Profile
          </Link>
        </li>
        <li style={{ marginLeft: '10px' }}>
          <Link className='linker' href="/about">
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  )
}
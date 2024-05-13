import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logomain from '../Assets/main_logo_banner.png'

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
    <div style={{ marginRight: 'auto' }}>
        <Image src={logomain} alt="Logo" width={355} height={52} />
      </div>
      <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
        <li style={{ marginLeft: '10px' }}>
          <Link href="/">
            Home
          </Link>
        </li>
        <li style={{ marginLeft: '10px' }}>
          <Link href="/search">
            Search
          </Link>
        </li>
        <li style={{ marginLeft: '10px' }}>
          <Link href="/login">
            Login
          </Link>
        </li>
        <li style={{ marginLeft: '10px' }}>
          <Link href="/signup">
            Sign Up
          </Link>
        </li>
        <li style={{ marginLeft: '10px' }}>
          <Link href="/profile">
            Profile
          </Link>
        </li>
        <li style={{ marginLeft: '10px' }}>
          <Link href="/about">
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  )
}
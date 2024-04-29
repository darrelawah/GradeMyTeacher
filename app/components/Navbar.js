import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
        <li style={{ marginLeft: '10px' }}>
          <Link href="/">
            Home
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
      </ul>
    </nav>
  )
}
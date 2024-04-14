import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
        <Link href="/">Dashboard</Link>
        <Link href="/login">Login</Link>
    </div>
  )
}

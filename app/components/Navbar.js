import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
        <div>
            <Link href="/">Dashboard</Link>
        </div>
        <div>
            <Link href="/login">Login</Link>
        </div>
    </div>
  )
}

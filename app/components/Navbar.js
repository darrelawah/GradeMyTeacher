import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
        <ul>
            <li>
                <Link href="/">
                    Dashboard
                </Link>
            </li>
            <li>
                <Link href="/login">
                    Login
                </Link>
            </li>
        </ul>
    </nav>
  )
}
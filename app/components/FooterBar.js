import React from 'react'
import Link from 'next/link'

export default function FooterBar() {
  return (
    <div className='footer'>
      <div>
        <p className='footerText'>
          We are in no way associated with Rate My Professors as an entity or business rival. This site is a university project made by a collaborative effort on part on the students in our <Link style={{fontSize:'16px'}} className='linker' href="/about">About</Link> section during the spring semester of 2024.
        </p>
      </div>
    </div>
  )
}
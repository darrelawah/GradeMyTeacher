import React from 'react'

export default function FooterBar() {
  return (
    <div>
      <div style={{
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        backgroundColor: '#050066',
        color: '#DEDDEE',
        textAlign: 'center',
        padding: '10px 0'
      }}>
        <p>
          We are in no way associated with Rate My Professors as an entity or business rival. This site is a university project made by a collaborative effort on part on the students in our About section during the spring semester of 2024.
        </p>
      </div>
    </div>
  )
}
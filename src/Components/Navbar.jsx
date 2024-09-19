import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar () {
  return (
    <div className='navbarContainer'>
      <ul>
        <li>
          <Link to='/'>Anshu. </Link>
        </li>
        <li>
          <ul>
            <li>
              <Link to='/projects'>Projects </Link>
            </li>
            <li>
              <Link to='/skills'>Skills</Link>
            </li>
            <li>
              <a
                href='https://drive.google.com/file/d/1krun9snFI9a61opBYz3e-iCk-rMl5UHn/view?usp=drivesdk'
                target='_blank'
              >
                Resume
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

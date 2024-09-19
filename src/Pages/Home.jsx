import React from 'react'
import non from '../assets/non.png'
import { useNavigate } from 'react-router-dom'
import { FaGithubSquare, FaLinkedin, FaInstagram } from 'react-icons/fa'
// import profile from '../assets/profile.jpg'

export default function Home () {
  const navigate = useNavigate()
  return (
    <>
      <div className='homeContainer'>
        <div className='left'>
          <div className='line1'> Hi, I am Anshu Jaiswal </div>
          <div className='line2'>A Web Developer</div>
          <div className='intro'>
            I'm a proficient web developer and have strong knowledge of Data
            Structures and Algorithms, and I'm always eager to learn new
            technologies. I'm currently seeking opportunities as a Software
            Development Engineer. Explore my portfolio to see my projects and
            feel free to get in touch. Let's turn digital dreams into reality.
          </div>
          <div className='buttons'>
            <button
              onClick={() => {
                navigate('/contact')
              }}
            >
              Contact Me
            </button>
            <div className='icons'>
              <a href='https://github.com/anshujai' target='_blank'>
                <FaGithubSquare className='icon' />
              </a>
              <a
                href='https://www.linkedin.com/in/anshu-jaiswal-817744217?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
                target='_blank'
              >
                <FaLinkedin className='icon' />
              </a>
            </div>
          </div>
        </div>
        <div className='right'>
          <img src={non} alt='Profile Image' />
        </div>
      </div>
    </>
  )
}

import React from 'react'
import Navbar from './Components/Navbar.jsx'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Skills from './Pages/Skills'
import ContactMe from './Pages/ContactMe'
import { Route, Routes } from 'react-router-dom'

export default function App () {
  return (
    <div className='appContainer'>
      <div className='app'>
        <Navbar />
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<ContactMe />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import ProjectCard from '../Components/ProjectCard'
import chatappImg from '../assets/chatapp.png'
import notesImg from '../assets/notes.png'
// import calcImg from '../assets/calc.png'
// import commingSoonImg from '../assets/come.png'

export default function Projects() {
  return (
      <div className='projectContainer'>
      <h1>My Projects</h1>
      <div className="projects">
      <a href="https://react00chat00app.netlify.app/" target='_blank'><ProjectCard src={chatappImg} title={"React messaging app"} desc={"A unique way to chat"} /></a>
      <a href="https://ornate-starship-e90145.netlify.app/" target='_blank'><ProjectCard src={notesImg} title = {"Notes App"} desc={"A Note taking app"} /></a>
      </div>
    </div>
  )
}

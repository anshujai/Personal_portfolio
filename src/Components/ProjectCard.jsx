import React from 'react'

export default function ProjectCard(props) {
  return (
      <div className='cardContainer'>
          <div className="top">
              <img src={props.src} alt="Projecct Image" />
          </div>
          <div className="bottom">
              <div className="title">{props.title}</div>
              <div className="desc">{props.desc}</div>
          </div>
        </div>
      
  )
}

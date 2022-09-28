import React from 'react'
import '../styles/project.css'

export default function Project({ project }) {
    return (
        <div className='project'>
            <div className='project-img'>
                <img src={project.image} alt="img" />
            </div>
            <div className='p-body'>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link}>Read more <i className="fa-solid fa-up-right-from-square"></i></a>
            </div>
        </div>
    )
}

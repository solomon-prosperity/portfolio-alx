import React from 'react'
import '../styles/portfolio.css'
import { motion } from 'framer-motion'
import Project from '../Components/Project'
import projectData from '../data/projectData'



export default function Projects() {
    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ y: window.innerWidth, transition: { duration: '0.1' } }}
            className='projects'
        >
            <div className='project-item'>
                {projectData.map((p, i) => {
                    return (
                        <div className='p-list' >
                            <Project key={i} project={p} />
                        </div>
                    )
                })}
            </div>
        </motion.div>
    )
}

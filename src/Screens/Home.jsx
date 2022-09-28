import React from 'react'
import { motion } from 'framer-motion';
import homeImage from '../images/Saly-13homepic.svg'
import { useNavigate } from 'react-router-dom';
import '../styles/home.css'
import TypewriterComponent from 'typewriter-effect';

export default function Home() {
  const navigate = useNavigate()
  return (
    <motion.div
      className='home'
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ y: window.innerWidth, transition: { duration: '0.1' } }}
    >

      <div className="home-image">
        <img src={homeImage} alt="imagej" />
      </div>
      <div className="home-text">
        <div className='text-animate'>
          <TypewriterComponent
            onInit={(typewriter) => {
              typewriter.typeString('<h1>Hey there 👋</h1>')
                .pauseFor(1000)
                .typeString('<h1>i am</h1>')
                .pauseFor(1000)
                .typeString('<h1>Afuwape Ayodeji<h1>')
                .start()
            }
            }
          />
        </div>
        {/* <h1>  </h1>
        <h1>i am Afuwape Ayodeji</h1> */}
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <div className="buttons">
          <button className='style-btn' onClick={() => navigate('/about')}>About me</button>
          <button className='style-btn' onClick={() => navigate('/projects')} >😮 Let’s see portfolios</button>

        </div>
      </div>
    </motion.div>
  )
}

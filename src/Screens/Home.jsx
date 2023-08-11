import React from 'react'
import { motion } from 'framer-motion';
import homeImage from '../images/Saly-13homepic.svg'
import { useNavigate } from 'react-router-dom';
import '../styles/home.css'
import TypewriterComponent from 'typewriter-effect';
import { userData } from '../data/userData';

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
                .typeString(`<h1>${userData.name}<h1>`)
                .start()
            }
            }
          />
        </div>
        {/* <h1>  </h1>
        <h1>i am Afuwape Ayodeji</h1> */}
        <p>{userData.tagLine}</p>
        <div className="buttons">
          <button className='style-btn' onClick={() => navigate('/bio')}>About me</button>
          <button className='style-btn' onClick={() => navigate('/portfolio')} >😮 Let’s see portfolios</button>

        </div>
      </div>
    </motion.div>
  )
}

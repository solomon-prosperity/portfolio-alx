import React from 'react';
import { motion } from 'framer-motion';
import homeImage from '../images/Saly-13homepic.svg';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css';
import TypewriterComponent from 'typewriter-effect';
import { userData } from '../data/userData';

export default function Home() {
  const navigate = useNavigate();

  const handleTypewriterComplete = () => {
    const paragraph = document.querySelector('.home-text p');
    if (paragraph) {
      paragraph.style.display = 'block';
    }
  };

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
              typewriter
                .typeString('<h1>Hi there 👋</h1>')
                .pauseFor(1000)
                .typeString('<h1 class="c-orange">meet</h1>')
                .pauseFor(1000)
                .typeString(`<h1>${userData.name}</h1>`)
                .callFunction(handleTypewriterComplete)  // Call the function when typing is done
                .start();
            }}
          />
        </div>
        <p style={{ display: 'none', fontSize: "20px", textAlign: "center", marginLeft: "20px" }}>A Professional <span className="c-orange">Software</span> and <span className="c-orange">Cloud</span> Engineer</p>
        <div className="buttons">
          <button className='style-btn' onClick={() => navigate('/bio')}>About me</button>
          <button className='style-btn' onClick={() => navigate('/portfolio')}>😮 check out my portfolio</button>
        </div>
      </div>
    </motion.div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../images/Saly-10aboutpic.svg';
import '../styles/about.css';
import { userData } from '../data/userData';

export default function About() {
  return (
    <motion.div
      className="about"
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ y: window.innerWidth, transition: { duration: '0.1' } }}
    >
      <div className="about-top">
        <div>
          <img src={aboutImage} alt="log" />
        </div>
        <div>
          <h1>
            I'm {userData.name}, A <span className="c-orange">Data Scientist.</span>{' '}
          </h1>
        </div>
      </div>
      <section className="about-me">
        <br />
        <p className="normal-text">
          {userData?.bio1 && userData?.bio1}
        </p>

        <br />
        <p className="normal-text">
        {userData?.bio2 && userData?.bio2}

        </p>

       
      </section>
    </motion.div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../images/Saly-10aboutpic.svg';
import Project from "../Components/Project"
import '../styles/about.css';
import { userData } from '../data/userData';

export default function Blog() {
  return (
    <motion.div
      className="about"
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ y: window.innerWidth, transition: { duration: '0.1' } }}
    >
      <h1 className="elevator-pitch"> My <span className="c-orange">Elevator</span> Pitch</h1>
      {/* <div className="about-top">
        <div>
          <img src={aboutImage} alt="log" />
        </div>
        <div className="elevator-pitch">
          <h1>
            My <span className="c-orange">Elevator</span>{' '}
            <span className="c-orange">Pitch</span>
          </h1>
        </div>
      </div> */}
      <section className="about-me">
        <br />
        {/* <p className="normal-text">{userData?.elevator1 && userData?.elevator1}</p>

        <br />
        <p className="normal-text">{userData?.elevator2 && userData?.elevator2}</p>
        <p className="normal-text">{userData?.elevator3 && userData?.elevator3}</p> */}
        <div className="pitch-video">
              <div className="slide">
                <Project
                  project={{
                    pitchDescription:  userData.pitchDescription,
                    title: userData.pitchTitle,
                    youtubeUrl: userData.youtubeUrl,
                    link: userData.youtubeUrl,
                    pitchUrl: "https://www.youtube.com/embed/YMuPoJse438?feature=share"
                  }}
                />
              </div>
      </div>
      </section>
    </motion.div>
  );
}

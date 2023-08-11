import React from 'react';
import '../styles/portfolio.css';
import { motion } from 'framer-motion';
import Project from '../Components/Project';
import projectData from '../data/projectData';
import slide from '../images/slide.png';
import { userData } from '../data/userData';

export default function Projects() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ y: window.innerWidth, transition: { duration: '0.1' } }}
      className="projects"
    >
      <h1>These are my awesome projects</h1>
      {/* <div className="project-item">
        {projectData.map((p, i) => {
          return (
            <div className="p-list">
              <Project key={i} project={p} />
            </div>
          );
        })}
      </div> */}
      {/* https://docs.google.com/presentation/d/1wOV7VE4iMrJ3vWyW4Q7XDe5drzSqH_NiZ8AMuHyoqPI/edit#slide=id.g259adbad2c5_1_192 */}
      <div className="two-pr">
        {/* <div className="youtube-vid">
          <iframe
            width="700"
            height="505"
            src="https://www.youtube.com/embed/Z376MI1h8T8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div> */}
              <div className="slide">
                <Project
                  project={{
                    description:  userData.slideDescription,
                    title: userData.youtubeTitle,
                    youtubeUrl: userData.youtubeUrl,
                    link: userData.youtubeUrl,
                  }}
                />
              </div>
        <div className="slide">
          <Project
            project={{
              description:  userData.slideDescription,
              title: userData.slideTitle,
              image: userData.slideImage,
              link: userData.slideLink,
            }}
          />
        </div>
      
      </div>
    </motion.div>
  );
}

import React from 'react';
import '../styles/project.css';
import { userData } from '../data/userData';

export default function Project({ project }) {
  return (
    <div className="project">
      <div className="project-img">
        {project.youtubeUrl ? (
          <iframe
            className="yt-if"
            src="https://www.youtube.com/embed/_TGzebVh0Tk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        ) : (
          <img src={project.image} alt="img" />
        )}
      </div>
      <div className="p-body">
        <h3>{project.title}</h3>
        <p>{project.youtubeUrl ? userData.youtubeDescription : project.description}</p>
        <a href={project.link} target="_blank" rel="noreferrer">
        {project.youtubeUrl ? "View Project Video" : "View Project PDF"} <span>{" "}</span> <i className="fa-solid fa-up-right-from-square"></i>
        </a>
      </div>
    </div>
  );
}

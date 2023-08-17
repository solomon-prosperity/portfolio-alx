import React from 'react';
import '../styles/project.css';
import { userData } from '../data/userData';

function getAction (data) {
  let action;
  if (data.youtubeUrl && !data.pitchUrl) return action = "View Project Video"
  if (data.pitchUrl) return action = "View on Youtube"
   action = "View Project PDF"
   return action
}

function getDesc (data) {
  let desc;
  if (data.youtubeUrl && !data.pitchDescription) return desc = userData.youtubeDescription
  if (data.pitchDescription) return desc = data.pitchDescription
   desc = data.description
   return desc
}


export default function Project({ project }) {
  return (
    <div className="project">
      <div className="project-img">
        {project.youtubeUrl ? (
          <iframe
            className="yt-if"
            src= {project.pitchUrl ? project.pitchUrl : project.youtubeUrl}
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
        <p>{getDesc(project)}</p>
        <a href={ project.youtubeUrl ? project.link : project.slideLink } target="_blank" rel="noreferrer">
        {getAction(project)} <span>{" "}</span> <i className="fa-solid fa-up-right-from-square"></i>
        </a>
      </div>
    </div>
  );
}

import React from 'react';
import githubLogo from '../images/iconfinder_github-social-media_765246 1git.svg';
import twitterLogo from '../images/iconfinder_twitter_317720 1twit.svg';
import '../styles/footer.css';
import { userData } from '../data/userData';
export default function Footer() {
  return (
    <footer style={{marginTop:'2rem'}}>
      <div className="icons">
        {/* <a href="https://github.com/ayodeji1167"> <img src={githubLogo} alt="git" /> </a> */}
        {/* <a href=""> <img src={twitterLogo} alt="twitter" /></a> */}
        <a href={userData.linkdin}>
          {' '}
          <i className="fa-brands fa-linkedin-in"></i>{' '}
        </a>
      </div>
    </footer>
  );
}

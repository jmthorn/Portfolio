import React from 'react';
import me from '../../images/me.jpg'
import './About.css';

function About(){


  return (
    <div id="about-container">
      <img id="me-img" src={me} alt="me"></img>
      <div id="about-description">
        <div id="about-title">ABOUT ME</div>
        <div className="about-line"></div>
        <div id="about-par">Hi, I'm Jessica, but you can call me Beanie. I grew up in Austin, TX and went to school for architectural design. I've worked for several years in the industry building healthcare buildings before I found my passion for software development. Since leaving architecture, I've honed my skills in languages like JavaScript and Python as well as several other technologies. I'm a natural problem solver, so the puzzle of code keeps me engaged daily. Please reach out if you have any questions about my work or would like to work with me in the future!</div>
      </div>
    </div>
  );
}

export default About;
import React from 'react';
import oblique from '../../images/oblique.jpg'
import github from '../../images/skills/github.png'
import linkedin from '../../images/skills/linkedin.png'
import './Contact.css';

function Contact(){


  return (
    <div id="contact-container">
      <div className="img-oblique">
        <img src={oblique} alt="oblique"></img>
      </div>
      <div>I'd love to hear from you!</div>
      <div id="email-contact">Contact me at <a href="mailto:jmthorn16@gmail.com">jmthorn16@gmail.com</a></div>
      <div id="contact-logos">
        <a href="https://github.com/jmthorn">
          <img src={github} alt="github"></img>
        </a>
        <a href="https://www.linkedin.com/in/jessica-thornton-00615989/">
          <img src={linkedin} alt="linkedin"></img>
        </a>
      </div>
    </div>
  );
}

export default Contact;
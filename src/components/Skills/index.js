import React from 'react';
import css from '../../images/skills/css.png'
import flask from '../../images/skills/flask.png'
import git from '../../images/skills/git.png'
import github from '../../images/skills/github.png'
import html from '../../images/skills/html.png'
import indesign from '../../images/skills/indesign.png'
import javascript from '../../images/skills/javascript.png'
import linkedin from '../../images/skills/linkedin.png'
import node from '../../images/skills/node.png'
import photoshop from '../../images/skills/photoshop.png'
import psql from '../../images/skills/psql.png'
import python from '../../images/skills/python.png'
import revit from '../../images/skills/revit.jpg'
import sketchup from '../../images/skills/sketchup.png'
import sqlalchemy from '../../images/skills/sqlalchemy.jpg'
import './Skills.css';

function Skills(){


  return (
    <div id="skills-container">
      <div id="skills-title">SKILLS</div>
      <div id="skills-line"></div>
      <div id="skills-logos">
        <img src={python} alt="python"></img>
        <img src={javascript} alt="javascript"></img>
        <img src={psql} alt="psql"></img>
        <img src={node} alt="node"></img>
        <img src={html} alt="html"></img>
        <img src={css} alt="css"></img>
        <img src={flask} alt="flask"></img>
        <img src={git} alt="git"></img>
        <img src={sqlalchemy} alt="sqlalchemy"></img>
        <img src={indesign} alt="indesign"></img>
        <img src={photoshop} alt="photoshop"></img>
        <img src={revit} alt="revit"></img>
        <img src={sketchup} alt="sketchup"></img>
      </div>
    </div>
  );
}

export default Skills;
import React, { useEffect } from 'react';
import hi from '../../images/cover-hi.png'
import './Homepage.css';

function Homepage(){

  let workDiv;

  useEffect(() => { 
    workDiv = document.getElementById("work-container")
  }, [])

  return (
    <div id="homepage-container">
        <div id="get-to-know-button">
            <img id="hi-jessica" src={hi} alt="Hi"></img>
            <div>I'M A SOFTWARE ENGINEER</div>
            <button onClick={() => workDiv.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"}) }>CHECK OUT MY WORK</button>
        </div>
    </div>
  );
}

export default Homepage;
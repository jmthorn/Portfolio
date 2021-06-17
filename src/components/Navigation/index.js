import React, { useEffect} from 'react';
import './Navigation.css';

function Navigation({ isLoaded }){

  let workDiv;
  let aboutDiv;
  let contactDiv;

  useEffect(() => { 
    workDiv = document.getElementById("work-container")
    aboutDiv = document.getElementById("about-container")
    contactDiv = document.getElementById("contact-container")
  }, [])


  return (
    <div id="nav-container">
      <nav>
        <ul className="nav-list">
          <li>
              <div >
                <div>JESSICA</div>
                <div>THORNTON</div>
              </div>
          </li>
          <span id="nav-options">
            <li>
              <div className="nav-option" onClick={() => workDiv.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"}) }>
                MY WORK
              </div>
            </li>
            <li>
              <div className="nav-option" onClick={() => aboutDiv.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"}) }>
                ABOUT
              </div>
            </li>
            <li>
              <div className="nav-option" onClick={() => contactDiv.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"}) }> 
                CONTACT
              </div>
            </li>
          </span>
        </ul>
      </nav>

    </div>
  );
}

export default Navigation;
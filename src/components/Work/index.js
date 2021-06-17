import React from 'react';
import archibnb from '../../images/websites/archibnb.png'
import brainfood from '../../images/websites/brainfood.png'
import trademarian from '../../images/websites/trademarian.png'
import wayfinder from '../../images/websites/wayfinder.png'
import './work.css';

function Work(){


  return (
    <div id="work-container">
      <div id="websites-container">

        <div className="website-container">
          <a href="https://wayfinder-app.herokuapp.com/">
            <img src={wayfinder} alt="wayfinder"></img>
          </a>
          <div className="webisite-info">
            <div className="work-title">Wayfinder</div>
            <div className="work-line"></div>
            <div className="work-description">In this itinerary builder, a user can look up destinations by city and add them to their trip. After adding destinations, an itinerary will be produced, displaying an optimized time schedule of events.</div>
          </div>
        </div>

        <div className="website-container">
          <div className="webisite-info">
            <div className="work-title">ArchiBnb</div>
            <div className="work-line"></div>
            <div className="work-description">In this AirBnb clone, a user can search for and book an architecturally significant house for a stay. The user can also manage their bookings and leave a review for the property.</div>
          </div>
          <a href="https://archibnb.herokuapp.com/">
            <img src={archibnb} alt="archibnb"></img>
          </a>
        </div>
        <div className="website-container">
          <a href="https://trademarian.herokuapp.com/">
            <img src={trademarian} alt="trademarian"></img>
          </a>
          <div className="webisite-info">
            <div className="work-title">TradeMarian</div>
            <div className="work-line"></div>
            <div className="work-description">TradeMarian, is a clone of Robinhood, a stock trading and investing website. Users can view, buy and sell, and add stocks to their personal watchlists.</div>
          </div>
        </div>
        <div className="website-container">
          <div className="webisite-info">
            <div className="work-title">BrainFood</div>
            <div className="work-line"></div>
            <div className="work-description">Our website will allow you to browse through books aimed at personal development. You will be able to add books to your custom bookshelves, and add ratings and reviews to each book.</div>
          </div>
          <a href="https://brainfood-app.herokuapp.com/">
            <img src={brainfood} alt="brainfood"></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Work;
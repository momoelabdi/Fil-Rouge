import React from 'react';
import windsurf from "../images/windsurf.jpg"
import "./App.css";



function Home() {
  return (
    <div className='home'>
      <div className='navbar'>
        <h1>WINDSURFING ELEMENTS </h1>
     </div>
     <div className="banner" style={{backgroundImage: url("../images/windsurf.jpg")}}>
        <div className="container">
          <h1>Le Wagon brings <strong>tech skills</strong> to <strong>creative people</strong>!</h1>
          <p>Change your life and learn to code at one of our campuses around the world.</p>
          <a className="btn btn-flat" href="#">Apply now</a>
        </div>
      </div>
    </div>
   );
}

export default Home;

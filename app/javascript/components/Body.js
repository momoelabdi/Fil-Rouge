import React from 'react';



import { BrowserRouter as Router, Routes, Route, Link  } from "react-router-dom";

function Body() {
  return (
    <Router>
      <nav id='nav'>
        <Link className='navBar' to="/">Home</Link>
        <Link className='navBar' to="about"> About</Link>
        <Link className='navBar' to="offers"> Offers</Link>
        <Link className='navBar' to="prices"> Prices</Link>
      </nav>
      <Routes>
        <Route path="/" element={<index.html.erb />} />
        <Route path="/about" element={<About />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/prices" element={<Prices />} />
      </Routes>
      <div className="footer">
        <div className='contacts'>
          <h2> Contact us</h2>
          <a href="mailto:Bernd.info@example.com?body=My custom mail body">Email: bernd@gmail.com</a>
          <p>Tel: +41 71 324 56 78</p>
          <p>Address: infogasse 01 | Arau 1234 </p>
        </div>
        <div className="links">
          <h2>Links</h2>
          <Link className='fobar' to="/">Home</Link>
          <Link className='fobar' to="about"> About</Link>
          <Link className='fobar' to="offers"> Offers</Link>
          <Link className='fobar' to="prices"> Prices</Link>
        </div>
      </div>
    </Router>
   );
}

export default Body;

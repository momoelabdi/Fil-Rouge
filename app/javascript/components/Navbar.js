import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link  } from "react-router-dom";

function Navbar() {
  return (
    <Router>
      <nav id='nav'>
        <Link className='navBar' to="/">Home</Link>
        <Link className='navBar' to="about"> About</Link>
        <Link className='navBar' to="offers"> Offers</Link>
        <Link className='navBar' to="prices"> Prices</Link>
      </nav>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/about" element={<About />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/prices" element={<Prices />} /> */}
      </Routes>
    </Router>
   );
}

export default Navbar;

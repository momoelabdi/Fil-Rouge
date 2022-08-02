import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link  } from "react-router-dom";
import Clients from './Clients';
import Commandes from './Commandes';
import Cours from './Cours';
import Bookings from './Bookings';
import Home from "./Home";
import Offers from "./Offers";
import "./App.css";




function App() {

  return (
    <div>
        <Router>
            <nav id='nav'>
              <Link className='navBar' to="/">Home</Link>
              {/* <Link className='navBar' to="commandes"> Commande</Link> */}
              <Link className='navBar' to="clients"> Clients</Link>
              {/* <Link className='navBar' to="cours"> Cours</Link> */}
              <Link className='navBar' to="Offers"> offers</Link>
              <Link className='navBar' to="Bookings"> Booking</Link>
            </nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bookings" element={<Bookings />} />
              <Route path="/commandes" element={<Commandes />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/cours" element={<Cours />} />
              <Route path="/Offers" element={<Offers />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;

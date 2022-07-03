import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link  } from "react-router-dom";
import Clients from './Clients';
import Commandes from './Commandes';
import Cours from './Cours';
import Home from "./Home";
import "./App.css";


// import { Routes } from 'react-router-dom';

function App() {

  return (
    <div>
        <Router>
            <nav id='nav'>
              <Link className='navBar' to="/">Home</Link>
              <Link className='navBar' to="commande"> Commandes</Link>
              <Link className='navBar' to="client"> Clients</Link>
              <Link className='navBar' to="cours"> Cours</Link>
            </nav>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/commande" element={<Commandes />} />
            <Route path="/client" element={<Clients />} />
            <Route path="/Cours" element={<Cours />} />
          </Routes>
        </Router>

        {/* The data fetched from the two UHA 4.0 apis below, uncomment them to display the data*/}
        {/* <Clients />
        <Commandes /> */}
          {/* <Commandes />
          <Cours />
        <Footer /> */}

    </div>
  );
}

export default App;

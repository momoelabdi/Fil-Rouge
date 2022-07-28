import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link  } from "react-router-dom";
import Clients from './Clients';
import Commande from './Commande';
import Cours from './Cours';
import Home from "./Home";
import Test from "./Test";
import "./App.css";




function App() {

  return (
    <div>
        <Router>
            <nav id='nav'>
              <Link className='navBar' to="/">Home</Link>
              <Link className='navBar' to="commande"> Commande</Link>
              <Link className='navBar' to="client"> Clients</Link>
              <Link className='navBar' to="cours"> Cours</Link>
              <Link className='navBar' to="test"> Test</Link>
            </nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/commande" element={<Commande />} />
              <Route path="/client" element={<Clients />} />
              <Route path="/cours" element={<Cours />} />
              <Route path="/Test" element={<Test />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Clients from "./Clients";
import Commandes from "./Commandes";
import Cours from "./Cours";
import Bookings from "./Bookings";
import Confirmations from "./Confirmations";
import Home from "./Home";
import Offers from "./Offers";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <nav id="nav">
          <Link className="navBar" to="/">
            Home
          </Link>
          {/* <Link className="navBar" to="clients">
            {" "}
            Clients
          </Link> */}

          <Link className="navBar" to="offers">
            {" "}
            Offers
          </Link>
          <Link className="navBar" to="bookings">
            {" "}
            Booking
          </Link>
          {/* <Link className="navBar" to="confirmations">
            {" "}
            Confirmations
          </Link> */}
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/confirmations" element={< Confirmations />} />
          <Route path="/commandes" element={<Commandes />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/cours" element={<Cours />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

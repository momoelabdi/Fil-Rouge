import React from 'react';
import Commandes from "./Commandes";
import axios from "axios";


function Confirmations() {

  return (

    <div className="confirmations">
      <h1> I am confirmed </h1>
      <Commandes />
    </div>
  );
}

export default Confirmations;

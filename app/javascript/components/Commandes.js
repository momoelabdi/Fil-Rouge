import React from 'react';
import { Link } from "react-router-dom";
import Usefetch from "./Usefetch.";
import "./App.css";
// import axios from "axios";

function Commande() {
  const { data, loading, error } = Usefetch("/commandes");
  if (loading) {
    <h1>Loading...</h1>;
  }
  if (error) console.log(error);
  console.log(data);

  return (
    <div>
      <h2>Bookings details </h2>
      {/* {data?.map((d) => {
        return (
          <div key={d.id}>
            <p>client id :{d.client_id}</p>
            <p>cours id :{d.cour_id}</p>
            <p>Payement :{d.payement}</p>
          </div>
        );
      })} */}
      {/* <div>
        <form action="/commandes" method="post" id="form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input className="form-control"
              type="text" id="name"
              name="client_name"
              placeholder="Full Name ..." required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your E-mail</label>
            <input className="form-control"
              type="email"
              id="email"
              name="client_email"
              placeholder="Email..." required

            />
          </div>
          <div className="form-row">
            <div className="form-group col-6">
              <label htmlFor="checkin">Check-in Date</label>
              <input type="date" className="form-control" id="checkin" name="check_in"  required />
            </div>
            <div className="form-group col-6">
              <label htmlFor="checkout">Check-out Date</label>
              <input type="date" className="form-control" id="checkout" name="check_out"  required/>
            </div>
          </div>
          <button type="submit" className="btn btn-sm btn-primary" ></button>
          {/* <Link to="/clients">Book it</Link> */}
        {/* </form> */}
      {/* </div> */}
    </div>
  );
}

export default Commande;

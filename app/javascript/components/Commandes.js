import React, { useState } from "react";
import Usefetch from "../components/Usefetch.";
import "./App.css";
// import axios from "axios";

function Commandes() {
  const { data, loading, error } = Usefetch("/commandes");
  if (loading) {
    <h1>Loading...</h1>;
  }
  if (error) console.log(error);
  console.log(data);
  // const url = '/commandes';
  // axios.post(url, {
  //   client_name: '',
  //   client_email: '',
  //   check_in: '',
  //   check_out: ''

  // })
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });

  return (
    <div>
      <h2>Comandes details </h2>
      {/* {data?.map((d) => {
        return (
          <div key={d.id}>
            <p>client id :{d.client_id}</p>
            <p>cours id :{d.cour_id}</p>
            <p>Payement :{d.payement}</p>
          </div>
        );
      })} */}
      <div>
        <form action="/commandes" method="post">
          <div className="elem-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="client_name"
              placeholder="Full Name ..."
              required
            />
          </div>
          <div className="elem-group">
            <label htmlFor="email">Your E-mail</label>
            <input
              type="email"
              name="client_email"
              placeholder="Email..."
              required
            />
          </div>
          <div className="elem-group inlined">
            <label htmlFor="checkin">Check-in Date</label>
            <input type="date" id="checkin" name="check_in"  />
          </div>
          <div className="elem-group inlined">
            <label htmlFor="checkout">Check-out Date</label>
            <input type="date" id="checkout" name="check_out" />
          </div>
          <button type="submit" className="btn btn-primary">Book it</button>
        </form>
      </div>
    </div>
  );
}

export default Commandes;

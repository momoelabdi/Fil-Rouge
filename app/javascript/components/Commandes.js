import React, { useState } from "react";
import Usefetch from "../components/Usefetch.";
import "./App.css";
import axios from "axios";

function Commandes() {
  // const { data, loading, error } = Usefetch("/commandes");
  // if (loading) {
  //   <h1>Loading...</h1>;
  // }
  // if (error) console.log(error);
  // console.log(data);
  const url = '/commandes';
  axios.post(url, {
    client_name: '',
    client_email: '',
    check_in: '',
    check_out: ''

  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  return (
    <div>
      <div>
        <section>
          {/* <input className="input" type="text" placeholder="Your name"></input> */}
        </section>
      </div>
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
        <form action="Commandes#create" method="post">
          <div className="elem-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="clients_name" placeholder="Full Name ..."  required />
          </div>
          <div className="elem-group">
            <label htmlFor="email">Your E-mail</label>
            <input type="email" id="email" name="clients_email" placeholder="Email..." required />
          </div>
          {/* <div className="elem-group">
            <label htmlFor="phone">Your Phone</label>
            <input type="adresse" id="adresse" name="clients_adresse" placeholder="Adresse..." required />
          </div> */}
          <hr />
          <div className="elem-group inlined">
            <label htmlFor="adult">Adults</label>
            <input type="number" id="adult" name="total_adults" placeholder="2" min="1" required />
          </div>
          <div className="elem-group inlined">
            <label htmlFor="child">Children</label>
            <input type="number" id="child" name="total_children" placeholder="2" min="0" required />
          </div>
          <div className="elem-group inlined">
            <label htmlFor="checkin">Check-in Date</label>
            <input type="date" id="checkin" name="checkin" required />
          </div>
          <div className="elem-group inlined">
            <label htmlFor="checkout">Check-out Date</label>
            <input type="date" id="checkout" name="checkout" required />
          </div>
          <div className="elem-group">
            <label htmlFor="room-selection">Select Room Preference</label>
            <select id="room-selection" name="room_preference" required>
                <option value="">Choose a Cours from the List</option>
                <option value="connecting">Private</option>
                <option value="adjoining">Semi-private</option>
                <option value="adjacent">Groupe</option>
            </select>
          </div>
          <hr />
          <div className="elem-group">
            <label htmlFor="message">Anything Else?</label>
            <textarea id="message" name="visitor_message" placeholder="Tell us anything else that might be important." required></textarea>
          </div>
          <button type="submit">Book The Cours</button>
        </form>


    </div>
</div>

     );
}

export default Commandes;

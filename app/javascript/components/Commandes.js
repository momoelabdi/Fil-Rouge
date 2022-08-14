import React from "react";
import { Link } from "react-router-dom";
import Usefetch from "./Usefetch.";
import "./App.css";

function Commande() {
  const { data, loading, error } = Usefetch("/commandes");
  if (loading) {
    <h1>Loading...</h1>;
  }
  if (error) console.log(error);
  console.log(data);

  return (
    <div>
      <h2>YOUR BOOKING DETIAILS </h2>
      {data?.map((d, i, { length }) => {
        if (i === length - 1) {
          return (
            <div key={d.id}>
              <h3>Dear {d.client_name} </h3>
              <p>
                {" "}
                We are happy to announce you that you have successfully
                submmitted your booking, and we have saved it under the following adress  {d.client_email}
              </p>
              <p>We are looking forward to have you among us </p>
              <p>Thank you for your trust and see soon</p>
              <p>Your File Rouge surfing Adventure </p>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Commande;

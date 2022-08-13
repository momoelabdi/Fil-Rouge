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
      <h2>Bookings details </h2>
      {data?.map((d, i, { length }) => {
        if (i === length - 1) {
          return (
            <div key={d.id}>
              <p>Thank you dear {d.client_name} </p>
              <p>
                {" "}
                We have saved your booking details to our calender under the
                following account {d.client_email}
              </p>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Commande;

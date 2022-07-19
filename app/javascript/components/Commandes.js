import React from "react";
import Usefetch from "../components/Usefetch.";
import "./App.css";

function Commandes() {
  const { data, loading, error } = Usefetch("/commandes");
  if (loading) {
    <h1>Loading...</h1>;
  }
  if (error) console.log(error);
  console.log(data);

  return (
    <div>
      <div>
        <section>
          <input className="input" type="text" placeholder="Your name"></input>
        </section>
      </div>
      <h2>Comandes details </h2>
      {data?.map((d) => {
        return (
          <div key={d.id}>
            <p>client id :{d.client_id}</p>
            <p>cours id :{d.cour_id}</p>
            <p>Payement :{d.payement}</p>
          </div>
        );
      })}

    </div>

     );
}

export default Commandes;

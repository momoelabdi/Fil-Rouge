import React from "react";
import Usefetch from "../components/Usefetch.";
import "./App.css";
import home01 from "../images/home01.jpg"


function Cours() {
  const { data, loading, error } = Usefetch("/cours");
  if (loading) {
    <h1>Loading...</h1>;
  }
  if (error) console.log(error);
  console.log(data);
  return (
    <div>
        <h2 className="offers">Our offers</h2>
      <div className="cours-card">
        {data?.map((d) => {
          return (
            <div className="cours-details" key={d.id}>
              <img src={home01} alt="" />
              <h3>the package cou booked :{d.package}</h3>
              <p>the cours duration: <em>{d.durée}</em></p>
              <p>The price : <strong>{d.prix}</strong></p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cours;

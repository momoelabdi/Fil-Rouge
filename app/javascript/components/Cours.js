import React from "react";
import Usefetch from "../components/Usefetch.";
import "./App.css";
import home01 from "../images/home01.jpg";
import { Link } from "react-router-dom";

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
              <h4> Packages :{d.package}</h4>
              <p>
                The cours duration: <em>{d.durée}</em>
              </p>
              <p>
                Package price : <strong>{d.prix}</strong>
              </p>
              <Link to="/bookings">
                <button type="button" className="btn btn-info">
                  Booking
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cours;

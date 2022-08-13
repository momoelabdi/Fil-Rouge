import React from 'react';
import Usefetch from '../components/Usefetch.';
import { Link } from "react-router-dom";

function Clients() {
  const {data, loading, error} = Usefetch("/clients");
  if (loading) {<h1>Loading...</h1>};
  if (error) console.log(error);
  console.log(data)
  return (
    <div>

      <h2>Clients details </h2>
      {data?.map((d, i, { length }) => {
        if (i === length - 1)
        return(
          <div key={d.id}>
            <p>First name : {d.nom}</p>
            <p>Last name :{d.pseudo}</p>
            <p>Email : {d.mail}</p>
            <p>Adress : {d.adresse}</p>
            <p>Interests : {d.interets}</p>
            <p>Age :  {d.age}</p>
          </div>
        )
      })}
          <Link to="/cours">Book it <button type="submit" className="btn btn-primary" ></button>
          </Link>

    </div>
  );
}

export default Clients;

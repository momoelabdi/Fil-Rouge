import React from 'react';
import Usefetch from '../components/Usefetch.';

function Clients() {
  const {data, loading, error} = Usefetch("https://filrouge.uha4point0.fr/V2/shop/clients");
  if (loading) {<h1>Loading...</h1>};
  if (error) console.log(error);
  console.log(data)
  return (
    <div>

      <h2>Clients details </h2>
      {data?.map(d  => {
        return(
          <div key={d.id}>
            <p>name :{d.nom}</p>
            <p>nickname :{d.pseudo}</p>
          </div>
        )
      })}


    </div>
  );
}

export default Clients;

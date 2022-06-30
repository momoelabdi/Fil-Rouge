import React from 'react';
import Usefetch from '../components/Usefetch.';

function Commandes() {
  const {data, loading, error} = Usefetch("https://filrouge.uha4point0.fr/V2/shop/commandes");
  if (loading) {<h1>Loading...</h1>};
  if (error) console.log(error);
  console.log(data)
  return (
    <div>

      <h2>Ccomandes details </h2>
      {data?.map(d  => {
        return(
          <div key={d.id}>
            <p>Date :{d.date}</p>
            <p>Payement :{d.payement}</p>
          </div>
        )
      })}


    </div>
  );
}

export default Commandes;

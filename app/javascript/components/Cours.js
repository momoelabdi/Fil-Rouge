import React from 'react';
import Usefetch from '../components/Usefetch.';

function Cours() {
  const {data, loading, error} = Usefetch("/cours");
  if (loading) {<h1>Loading...</h1>};
  if (error) console.log(error);
  console.log(data)
  return (
    <div>

      <h2>Cours details </h2>
      {data?.map(d  => {
        return(
          <div key={d.id}>
            <p>the the package we prepared for you :{d.package}</p>
            <p>the cours duration :{d.durée}</p>
            <p>The price :{d.prix}</p>
          </div>
        )
      })}
    </div>
  );
}

export default Cours;

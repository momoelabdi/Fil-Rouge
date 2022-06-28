import React from 'react';
import Usefetch from '../components/Usefetch.';

function App() {
  const {data, loading, error} = Usefetch("https://filrouge.uha4point0.fr/V2/shop/clients");
  if (loading) {<h1>Loading...</h1>};
  if (error) console.log(error);

  return (
    <div>

      <h2>Do it right till the end</h2>
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

export default App;

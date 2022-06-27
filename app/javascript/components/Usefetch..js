import React from "react";
import React, { useEffect } from 'react';
import { useState } from "react";

function Usefetch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

     fetch('https://filrouge.uha4point0.fr/V2/shop/clients').then(response => {
        if (response.ok) {
          return response.json()
        }
        throw response;
      }).then(data => {
        setData(data);
      }).catch(error => {
        console.error('Error fetching data', error);
        setError(error);
      }).finally(() => {
        setLoading(false);
      })

    }, []);


    return {data, loading, error}
}

export default Usefetch;

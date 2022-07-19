import React, { useEffect, useState } from 'react';
import axios from "axios";

function Usefetch(url) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios.get(url).then((response) => {
            setData(response.data);
        }).catch((error) => {
            setError(console.log(error));
        }).finally(() => {
            setLoading(false);
        });
    }, [url])
    const addCommandes = () => {
      setLoading(true);
      axios.post(url).then((response) => {
          setData(response.data);
      }).catch((error) => {
          setError(console.log(error));
      }).finally(() => {
          setLoading(false);
      });
  }

    return {data, loading, error, addCommandes}
}

export default Usefetch;

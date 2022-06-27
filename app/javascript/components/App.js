import React from 'react';
import Usefetch from '../components/Usefetch';

function App() {
  const {data, loading, error, reFetch} = Usefetch('');
  console.log(data);
  return (
    <div>
      Do it right till the end

      <Usefetch />
    </div>
  );
}

export default App;

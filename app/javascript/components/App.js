import React from 'react';
import Clients from './Clients';
import Commandes from './Commandes';
import Navbar from './Navbar';
import Footer from './Footer';
import Cours from './Cours';

function App() {

  return (
    <div>
      <Navbar />
      {/* The data fetched from the two UHA 4.0 apis below, uncomment them to display the data*/}
      {/* <Clients />
      <Commandes /> */}
        <Cours />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import Clients from './Clients';
import Commandes from './Commandes';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {

  return (
    <div>
      <Navbar />
      {/* The data fetched from the two UHA 4.0 apis below, uncomment them to display the data*/}
      {/* <Clients />
      <Commandes /> */}
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import Clients from './Clients';
import Commandes from './Commandes';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {

  return (
    <div>
      <Navbar />
      {/* The data fetched from the two apis below */}
      {/* <Clients />
      <Commandes /> */}
      <Footer />
    </div>
  );
}

export default App;

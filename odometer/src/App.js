import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Odometer from './Odometer';



function App() {
  return (
    <div className="App">
      <Header greeting = "Welcome" />
      <Odometer />
      <Footer trademark = "Odometer"/>
      

    </div>
  );
}

export default App;

import React, { useState } from 'react';
import Header from './components/Header';
import MainBanner from './components/MainBanner';
import ProblemStatement from './components/ProblemStatement';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Map from './components/Map';
import './App.css';

function App() {
  const [selectedParkingSpot, setSelectedParkingSpot] = useState(null);

  // Example parking spot coordinates
  const parkingSpot = {
    lat: 22.7203,
    lng: 75.8682
  };

  return (
    <div className="App">
      <Header />
      <MainBanner />
      <ProblemStatement />
      <Features />
      <button 
        className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
        onClick={() => setSelectedParkingSpot(parkingSpot)}
      >
        Show Parking Spot on Map
      </button>
      {selectedParkingSpot && <Map destination={selectedParkingSpot} />}
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;

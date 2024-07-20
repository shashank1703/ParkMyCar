import React from 'react';

function Features() {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-4">How Our Solution Works</h2>
      <div className="flex justify-around">
        <div className="max-w-xs text-center">
          <h3 className="text-xl font-semibold mb-2">Real-time Parking Availability</h3>
          <p>View available parking spots in real-time.</p>
        </div>
        <div className="max-w-xs text-center">
          <h3 className="text-xl font-semibold mb-2">Reservation System</h3>
          <p>Reserve your parking spot in advance to avoid last-minute hassles.</p>
        </div>
        <div className="max-w-xs text-center">
          <h3 className="text-xl font-semibold mb-2">Easy Payments</h3>
          <p>Pay seamlessly through our secure digital payment gateway.</p>
        </div>
        <div className="max-w-xs text-center">
          <h3 className="text-xl font-semibold mb-2">Navigation Integration</h3>
          <p>Get real-time directions to your reserved parking spot.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;

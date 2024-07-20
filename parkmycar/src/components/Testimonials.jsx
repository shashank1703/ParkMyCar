import React from 'react';

function Testimonials() {
  return (
    <section className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
      <div className="space-y-4">
        <div className="bg-white p-4 rounded shadow">
          <p>"This app has made parking so much easier and stress-free. I love being able to see available spots in real-time."</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <p>"Reserving a spot in advance has saved me so much time and frustration. Highly recommend!"</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <p>"The seamless payment and navigation integration are game-changers. Parking has never been this convenient."</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

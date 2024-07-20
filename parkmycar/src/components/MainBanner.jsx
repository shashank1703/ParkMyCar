import React from 'react';

function MainBanner() {
  return (
    <section className="bg-cover bg-center h-64 text-white flex flex-col justify-center items-center" style={{ backgroundImage: "url('/path/to/banner-image.jpg')" }}>
      <h1 className="text-black text-4xl font-bold">Effortless Parking at Your Fingertips</h1>
      <p className="text-green-700 mt-2 text-xl">Find, Reserve, and Pay for Parking Spots Easily</p>
      <input type="text" placeholder="Search for parking locations..." className="text-green-700 mt-4 p-2 w-1/2 rounded border-spacing-2 " />
    </section>
  );
}

export default MainBanner;

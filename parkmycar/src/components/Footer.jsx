import React from 'react';

function Footer() {
  return (
    <footer className="p-4 bg-gray-800 text-white flex justify-between">
      <div>
        <p>Email: support@smartparking.com</p>
        <p>Phone: +91-1234567890</p>
      </div>
      <div>
        {/* Add social media links here */}
      </div>
      <div>
        <p><a href="#terms" className="hover:text-gray-400">Terms of Service</a></p>
        <p><a href="#privacy" className="hover:text-gray-400">Privacy Policy</a></p>
      </div>
    </footer>
  );
}

export default Footer;

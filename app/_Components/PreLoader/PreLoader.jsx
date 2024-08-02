import React, { useEffect } from 'react';
import './PreLoader.css'; // Ensure you have the appropriate CSS

const PreLoader = ({ setLoading }) => {
  useEffect(() => {
    const preloader = document.getElementById('preloader');
    // Simulate preloader duration
    setTimeout(() => {
      preloader.style.opacity = '0';
      setTimeout(() => {
        preloader.style.display = 'none';
        setLoading(false); // Update loading state to false
      }, 1000); // Match this duration with CSS transition duration
    }, 3000); // Duration of the preloader animation
  },[]);

  return (
    <div id="preloader">
      <div id="logo">
        <img src="./Pasted Graphic 1 copy.png" alt="Logo" />
      </div>
      <div id="loader"></div>
    </div>
  );
};

export default PreLoader;

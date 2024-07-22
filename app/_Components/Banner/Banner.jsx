"use client"; // Add this line

import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner-content'>
        <h1>IT'S TIME. <br/> REGISTER NOW!</h1>
        <button className='apply-button'>
          <span>Apply with Devfolio</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;

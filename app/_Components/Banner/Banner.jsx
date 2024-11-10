"use client"; // Add this line

import React from 'react';
import './Banner.css';
import dynamic from 'next/dynamic';

// Dynamically import the DevfolioButton component
const DevfolioButton = dynamic(() => import('../DevfolioBtn/DevfolioBtn'), { ssr: false });

const Banner = () => {
  return (
    <a href="https://submissions.ietvit.co/" target="_blank" rel="noopener noreferrer" className="banner-link">
      <div className='banner'>
        <div className='banner-content'>
          <h1>IT'S TIME. <br/> REGISTER NOW!</h1>
        </div>
      </div>
    </a>
  );
};

export default Banner;

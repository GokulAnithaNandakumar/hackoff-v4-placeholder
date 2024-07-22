import React, { useEffect } from 'react';
import './DevfolioBtn.css';

const DevfolioButton = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
}, []);

  return (
    <div
      className="apply-button"
      data-hackathon-slug="hackoffv4"
      data-button-theme="dark"
    >
    </div>
  );
};

export default DevfolioButton;

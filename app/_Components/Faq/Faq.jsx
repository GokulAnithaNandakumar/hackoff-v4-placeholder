"use client"; // Add this line

import React, { useState, useRef, useEffect } from 'react';
import './Faq.css';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [heights, setHeights] = useState([]);

  const contentRefs = useRef([]);

  useEffect(() => {
    setHeights(contentRefs.current.map(ref => ref.scrollHeight));
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='container'>
      <h1 className='h1faq'>FAQ'S</h1>
      <div className='container-inner'>
        {/* Section Title */}
        <div className='section-title'>
          <h1></h1>
        </div>

        {/* Tab / Collapse Section */}
        <div className='faq-tabs-container'>
          <div className='tab-container'>
            {Array(4).fill().map((_, index) => (
              <div className='tab-accordion' key={index}>
                <div
                  className={`titleWrapper ${activeIndex === index ? 'active' : 'inactive'}`}
                  onClick={() => toggleAccordion(index)}
                >
                  <h3>Do I need a fraud prevention system?</h3>
                  <div className="collapse-icon-container">
                    <div className='collapse-icon'>
                      <div className='acc-close'></div>
                      <div className='acc-open'></div>
                    </div>
                  </div>
                </div>
                <div
                  ref={el => (contentRefs.current[index] = el)}
                  className={`desWrapper ${activeIndex === index ? 'open' : ''}`}
                  style={{ maxHeight: activeIndex === index ? heights[index] : 0 }}
                >
                  <p>Fraud prevention can be the bane of some businesses, but also invisible to others. High chargeback rates are a clear indicator of fraudulent attacks, but some can go undetected until you implement a system.</p>
                  <ul>
                    <li><a href='#'>If you are in a high risk industry</a>, it is likely you are suffering attacks without noticing them.</li>
                    <li>If user authentication is a part of your business, it is highly recommended to implement a fraud prevention to stop account takeovers and identity theft.</li>
                    <li>Regulatory bodies are increasingly stringent about fraud prevention measures. To avoid hefty fines, it’s important to show you have put the best security in place.</li>
                  </ul>
                  <p>Finally, many organisations think they are too small to be targets of fraud. As we’ve discovered, companies of all sizes can be attacked,<a href='/use-cases/'>and in an increasing number of verticals.</a></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

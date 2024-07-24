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
                  <h3>WHAT IS A HACK-OFF EVENT?</h3>
                  <div className="collapse-icon-container">
                    <div className='collapse-icon'>
                      <div className='acc-close'></div>
                      <div className='acc-open'></div>
                    </div>
                  </div>
                </div>
                <div
                  ref={el => (contentRefs.current[index] = el)}
                  className={`faq-ans desWrapper ${activeIndex === index ? 'open' : ''}`}
                  style={{ maxHeight: activeIndex === index ? heights[index] : 0 }}
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.
                  </p>
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

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

  const faqData = [
    {
      question: "WHAT IS HACKOFF?",
      answer: "Hackoff is a global 48-hour hackathon in collaboration with Major League Hacking (MLH). Participants build innovative projects in areas like Data Science, AI, Robotics, IoT, AR/VR, and Blockchain. Having had over 3,500 participants from 15+ countries, expert mentors, workshops, and exciting prizes, Hackoff is an unmissable event for tech enthusiasts."
    },
    {
      question: "WHO ALL CAN PARTICIPATE?",
      answer: "Participation is open for absolutely anyone."
    },
    {
      question: "ARE THERE ANY PREREQUISITES OR REQUIRED SKILLS?",
      answer: "No, there are no prerequisites or required skills. Participants can work on whichever track they want with tools of their choice."
    },
    {
      question: "WHAT SHOULD I BRING TO A HACKATHON?",
      answer: "Bring your laptop, chargers, and any other tools you might need for coding or project development. It is also recommended to bring snacks, sleeping gear, and personal items."
    },
    {
      question: "WHAT SUPPORT IS AVAILABLE DURING THE HACKATHON?",
      answer: "Mentors, workshops, and resources will be provided to help participants with technical issues, idea development, and project execution."
    },
    {
      question: "HOW DO I PREPARE FOR A HACKATHON?",
      answer: "Familiarize yourself with the tracks. Practicing coding, brainstorming project ideas, and assembling a team in advance can be beneficial."
    },
  ];

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
            {faqData.map((faq, index) => (
              <div className='tab-accordion' key={index}>
                <div
                  className={`titleWrapper ${activeIndex === index ? 'active' : 'inactive'}`}
                  onClick={() => toggleAccordion(index)}
                >
                  <h3>{faq.question}</h3>
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
                  <p>{faq.answer}</p>
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

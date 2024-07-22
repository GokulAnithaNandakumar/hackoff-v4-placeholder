"use client"; // Add this line

import React from 'react';
import './Contact.css';

import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='container'>
      <h1 className='h1contact'>CONTACT US</h1>
      <div className='container-inner'>
        <div className='section-title'>
          <h1 className='emailLine'>Reach out to us at: <a href="mailto:iet@vit.ac.in"> iet@vit.ac.in </a></h1>
        </div>
        <div className='contact-container'>
          {[
            { name: 'UMANG NAULAKHA', role: 'EXECUTIVE CHAIRPERSON', phone: '+91 91043 31305' },
            { name: 'TANVEE HARLALKA', role: 'EVENTS HEAD', phone: '+91 91043 31305' },
            { name: 'NANDINI BHASKARAN', role: 'FINANCIAL HEAD', phone: '+91 91043 31305' },
          ].map((contact, index) => (
            <>
            <div className='contact-card-desktop' key={index}>
              <div className='contact-info'>
                <h3>{contact.name}</h3>
                <p>{contact.role}</p>
              </div>
              <div className='contact-phone'>
                <span className='contact-phone-desktop'>{contact.phone}</span>
                <div className='call-icon'><a href={`tel:${contact.phone}`} className='phone-call'><FaPhoneAlt /></a></div> 
              </div>
            </div>

            <div className='contact-card-mobile'>
            <div className='contact-info'>
              <h3>{contact.name}</h3>
              <p>{contact.role}</p>
              <span className='contact-phone-mobile'>{contact.phone}</span>
            </div>
              <div className='call-icon'><a href={`tel:${contact.phone}`} className='phone-call'><FaPhoneAlt /></a></div> 
          </div>
          </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;

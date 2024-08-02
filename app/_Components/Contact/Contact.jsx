"use client"; // Add this line

import React from 'react';
import './Contact.css';

import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='container4'>
      <h1 className='h1faq'>CONTACT US</h1>
      <div className='container-inner'>
        
        <div className='contact-container'>
          {[
            { name: 'UMANG NAULAKHA', role: 'EXECUTIVE CHAIRPERSON', phone: '+91 91043 31305' },
            { name: 'SANKALP SHARMA', role: 'EXECUTIVE SECRETARY', phone: '+91 96160 40112' },
            { name: 'TANVEE HARLALKA', role: 'EVENTS HEAD', phone: '+91 79806 65214' },
            { name: 'NANDINI BHASKARAN', role: 'FINANCIAL HEAD', phone: '+91 99789 41221' },
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

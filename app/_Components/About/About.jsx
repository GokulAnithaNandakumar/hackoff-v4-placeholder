import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about'>
      <div className='gridDisplay'>
        <div className='item1'>
          <h1 className='h1Abt'>About IET - VIT</h1>
          <div className="linkTeam">
            <h6>Meet Our Team</h6>
            <img src="./images/arrow.png" alt="Arrow" />
          </div>
        </div>
        <div className='item2'>
          <p className='AboutP'>IET-VIT represents Europe's largest and the world's second-largest professional society, The Institution of Engineering and Technology, at VIT, Vellore. Dedicated to spreading STEM knowledge, we offer students training and inspiration beyond the classroom. Our chapter hosts a variety of engaging events like workshops, ideathons, hackathons, and more, covering cutting-edge tech and essential real-world skills.</p>
        </div>
      </div>
    </div>
  )
}

export default About

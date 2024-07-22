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
          <p className='AboutP'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum adipisci itaque ratione assumenda quidem ducimus in ex, repellendus quia soluta et accusamus sunt. Architecto unde iste adipisci, sed explicabo tenetur.</p>
        </div>
      </div>
    </div>
  )
}

export default About

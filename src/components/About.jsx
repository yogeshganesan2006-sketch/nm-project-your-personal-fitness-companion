import React from 'react'
import '../styles/About.css'
import aboutImg from '../assets/about-Img.png'

const About = () => {
  return (
    <div className='about-container' id='about'>
      <div className="about-image">
        <img src={aboutImg} alt="About YOGESH FITZ" />
      </div>

      <div className="about-text">
        <span className="about-heading">
          <div className="about-line" />
          <h5>About Us</h5>
        </span>
        <h3>Embark on a Fitness Odyssey with YOGESH FITZ..</h3>
        <p>
            Welcome to YOGESH FITZ – the ultimate space where fitness meets passion and discipline meets fun.
            Here, it’s not just about workouts; it’s about building strength, confidence, and a lifestyle you’ll love.
            Our mission is simple: to push your limits, fuel your energy, and inspire you to become the strongest version of yourself.
            Every session is a step toward progress, every move a celebration of your growth.
            This is more than fitness. This is YOGESH FITZ – your journey, your rhythm, your transformation.
        </p>
      </div>
    </div>
  )
}

export default About



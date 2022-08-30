import React from 'react'

import { StaticImage } from 'gatsby-plugin-image'

const Hero = ({ showPerson }) => {
  return (
    <>
      {
        showPerson ? (<header className="hero">
        <StaticImage
          src="../assets/person.png"
          placeholder="blurred"
          className="hero-person"
          alt="person typing"
        />
        </header>
        ) : (<header className="hero-short">
    </header>)
      }
    </>
  )
}

export default Hero

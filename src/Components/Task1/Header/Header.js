import React from 'react'
import classes from './Header.module.css'
import backgroundImg from '../../../Images/Header-BG.png'
import Hero from './Hero'
import Navbar from './Navbar'

const Header = () => {

const backgroundStyle = {
  background: `linear-gradient(179.96deg, rgba(0, 0, 0, 0.83) 16.76%, rgba(0, 0, 0, 0.97) 67.5%, #000000 103.33%), url(${backgroundImg})`,
  backgroundSize: 'cover'
}

  return (
    <header className={classes['header']} style={backgroundStyle}>
      <Navbar />
      <Hero />
    </header>
  )
}

export default Header
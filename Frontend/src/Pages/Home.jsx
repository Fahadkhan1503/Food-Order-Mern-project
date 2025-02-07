// import React from 'react'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Qualities from '../components/Qualities'
import Menu from '../components/Menu'
import WhoAreWe from '../components/WhoAreWe'
import Team from '../components/Team'
import Reservation from '../components/Reservation'


const Home = () => {
  return (
    <>
        <h1>
            <HeroSection/>
            <About/>
            <Qualities/>
            <Menu/>
            <WhoAreWe/>
            <Team/>
            <Reservation/>
        </h1>
    </>
  )
}

export default Home
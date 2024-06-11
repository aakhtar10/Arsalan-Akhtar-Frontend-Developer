
import React from 'react'
import '../App.css'
import WithSubnavigation from '../components/Navbar'
import Section1 from './Section1'

const Home = () => {
   


  return (
    <div style={{backgroundColor:"#000"}}>
        <WithSubnavigation/>
        <Section1/>
    </div>
  )
}

export default Home
import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Populars'
import Slider from '../components/Slider'
import { useAuth } from '../contexts/AuthContext'

const Home = () => {
  return (
      <>
         <Navbar/>
         <Slider/>
         <Categories/>
         <Products/>
         <Newsletter/>
        <Footer/>
      </>
     
  )
}

export default Home
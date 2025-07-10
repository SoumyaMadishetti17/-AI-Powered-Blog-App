import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import BlogList from '../components/BlogList'
import NewLetter from '../components/NewLetter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <BlogList/>
        <NewLetter/>
        <Footer/>
    </div>
  )
}

export default Home
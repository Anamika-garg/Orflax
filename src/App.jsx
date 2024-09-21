import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Explore from './components/Explore'
import About from './components/About'
import Stats from './components/Stats'
import History from './components/History'
import Footer from './components/Footer'
import AboutPage from './Pages/AboutPage'
import ProductPage from './Pages/ProductPage'
import ContactPage from './Pages/ContactPage'
import WhyUs from './components/WhyUs'
import NeedHelp from './components/NeedHelp'
import Carousel from './components/Carousel'

const App = () => {
  return (
    <>
    {/* <Navbar/> */}
    <Home/>
    <Explore/>
    <About/>
    <WhyUs/>
    <Stats/>
    <History/>
    <NeedHelp/>
    {/* <AboutPage/> */}
    {/* <ProductPage/>
    <ContactPage/> */}
    {/* <Footer/> */}
    </>
  )
}

export default App
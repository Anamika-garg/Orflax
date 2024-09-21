import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Menu from './components/Menu'
import PreviousOrders from './components/PreviousOrders'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='Parent-container'>
      <Navbar/>
      <Home/>
      <Menu/>
      <PreviousOrders/>
      <Footer/>
    </div>
  )
}

export default App

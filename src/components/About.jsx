import React from 'react'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div id='About' className='about-container flex-col container min-h-[50vh] w-[100vw] flex items-center m-auto gap-8'>
        <div className="main-heading text-color text-4xl font-bold border-b-2 border-yellow-600 p-6 uppercase">About us</div>
        <div className="about-text-sec text-center text-2xl flex items-center gap-8 flex-col min-h-[200px] w-[80%] relative">
        ORFLAX INDIA PVT LTD is dedicated to excel in the research, development and production of wires and cables for electrical and other electronic applications <br></br>
        <br />
        We are a North India based business group with wide range of copper and aluminium wires & cables.
            <div className="btn w-[250px] h-[50px] rounded-md flex items-center justify-center relative bg-red-200 text-white text-semibold">
              <Link to={'/about'}>  Continue Reading </Link>
               
            </div>
        </div>
    </div>
  )
}

export default About
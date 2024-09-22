import React from 'react'
import {Link} from 'react-router-dom'
const History = () => {
  return (
    <div id='History' className='History-container container gap-12 m-auto mt-10 min-h-[60vh] w-[100vw] flex flex-col justify-center items-center mb-4'>
        <div className="p-2 main-heading text-color font-bold text-5xl border-b-2 border-yellow-600"> History </div>
        <div className="text-container text-2xl text-center flex flex-col gap-12 items-center min-h-[20vh] w-[80%] relative">
        Since 15 Years, ORFLAX INDIA PVT LTD is dedicated to excel in the research, development and production of wires and cables for electrical and other electronic applications. We manufacture our products in various sizes as per IS specification and also as per customers specifications. It is the result of our continuous efforts and sheer determination that we have been able to win the confidence of our clients.
        <Link to = {'/about'}>
            <div className="btn w-[250px] h-[50px] rounded-md flex items-center justify-center relative bg-red-200 text-white text-semibold">
               Know More
            </div></Link>
        </div>
    </div>
  )
}

export default History
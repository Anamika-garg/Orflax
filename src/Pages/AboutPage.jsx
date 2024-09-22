import React, { useState } from 'react';
import Chatbot from '../components/Chatbot';
import vdo from '/bgvideo.mp4'

const AboutPage = () => {

  const [chat, setChat] = useState(false);
  const changeVisibility = () => {
    console.log(chat)
    setChat(!chat);
  }

  return (
    <div className='container gap-10 m-auto flex items-center flex-col min-h-[150vh] w-[100vw] top-20 relative'>
      <div className="aboutPage w-[100vw] flex h-[200px] items-center justify-center relative main-heading text-color text-center text-5xl p-8 uppercase border-b-2 border-yellow-700 font-semibold">
        About Us
      </div>
      <div className="container m-auto mt-8 text flex flex-col min-h-[100%] w-[100%] relative">

      
        <p className='p-1 mx-8 my-1'>ORFLAX INDIA PVT LTD has emerged as one of the leading manufacturer and supplier of different type of electric wires & cables under the brand name of “ORFLAX”. We are an ISO 9001-2015 certified company and we have earned this valuable recognition in a short time period. We are engaged in the manufacture and supply of Power & Control Cables, LT XLPE/PVC Cables, Lighting Cables (House Wiring), Insulated Electrical Cables, PVC Electrical Cables and all types of industrial cables.</p>
        <br />
        <p className='p-1 mx-8 my-1'>Since 15 Years, ORFLAX INDIA PVT LTD is dedicated to excel in the research, development and production of wires and cables for electrical and other electronic applications. We manufacture our products in various sizes as per IS specification and also as per customers specifications. It is the result of our continuous efforts and sheer determination that we have been able to win the confidence of our clients.</p>
        <br />
        <p className='p-1 mx-8 my-1'>Our brand of wires & cables matches highest international standards for quality and dependability each Cable/Wire undergoes rigorous quality check at every stage right from purchasing of raw materials to designing, manufacturing & dispatching.</p>
        <br />
        <p className='p-1 mx-8 my-1' >We are a North India based business group with wide range of copper and aluminium wires & cables.</p>
        <br /><br />
      </div>


      
      {/* <div className="video-con mb-36 flex relative min-h-[40%] items-center justify-center w-[100%]">
          <video
            loop
            autoPlay
            className='relative min-h-[400px] w-[500px] flex'
            muted
          >
            <source src={vdo} type="video/mp4" />
          </video>
        </div> */}

      {/* Chatbot */}
      {

        chat ? <Chatbot /> : <></>
      }
      <div className="z-10 cursor-pointer chatbot-con flex items-center justify-center rounded-full mr-0 flex-col bottom-[10px] self-end fixed h-[180px] w-[150px]">
        <div className="chatbot h-[100px] w-[100px] rounded-full relative">
          <img src="/chatbot.png" alt="" onClick={changeVisibility} />

        </div>
        <div className="text text-center text-color ml-10 text-lg font-bold">Need Help?</div>
      </div>

    </div>
  )
}

export default AboutPage
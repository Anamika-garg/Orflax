import React, { useEffect, useState } from 'react'
import bg from '/bgai.png'
import Chatbot from './Chatbot';


const Home = () => {
  const [chat, setChat] = useState(false);
  const changeVisibility =() =>{
    console.log(chat)
    setChat(!chat);
  }

  return (
    <div id='Home' className='Home-container min-h-[30vh] w-[100vw] m-auto flex flex-col items-center'>
      {/* carausols */}
      <div className="carausels-con mb-16 flex items-center justify-around relative h-[500px] w-[90%] flex-wrap rounded-md">
        <div className="text-sec flex justify-center flex-col gap-10 ml-14 w-[30%] h-[100%] relative">
          <h1 className="text-home text-6xl font-bold capitalize text-left">Leading solution in wire and cable industry</h1>
          {/* <h1 className="text-6xl text-color font-extrabold text-left uppercase">ORFLAX</h1> */}
          <div className="btn call-now-btn h-[50px] w-[150px] text-[20px] relative center text-left flex items-center justify-center rounded-md">Call Now</div>
        </div>
        <div className="img-sec flex justify-end w-[50%] h-[100%] relative">
          <img src={bg} className='relative h-[100%] w-[120%] rotate-[-24deg]' alt="" />
        </div>
      </div>
      {

          chat ? <Chatbot/>  : <></>
      }
     

      <div className="z-10 cursor-pointer chatbot-con flex items-center justify-center mr-6 flex-col bottom-[10px] self-end fixed h-[150px] w-[150px]">
        <div className="chatbot h-[100px] w-[100px] rounded-full relative">
          <img src="/chatbot.png" alt="" onClick={changeVisibility} />
          
        </div>
        <div className="text text-center ml-10 text-lg font-extrabold text-white">Need Help?</div>
      </div>
      
    </div>
  )
}

export default Home
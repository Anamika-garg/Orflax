import React, { useEffect, useState } from 'react'
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
      {

          chat ? <Chatbot/>  : <></>
      }
     
      <div className="carausels-con flex-col gap-10 mb-16 flex items-center justify-center relative h-[500px] w-[100%] rounded-md"></div>

      <div className="z-10 cursor-pointer chatbot-con flex items-center justify-center mr-6 flex-col bottom-[10px] self-end fixed h-[150px] w-[150px]">
        <div className="chatbot h-[100px] w-[100px] rounded-full relative bg-white">
          <img src="/chatbot.png" alt="" onClick={changeVisibility} />
          
        </div>
        <div className="text text-center ml-10 text-lg font-extrabold text-color">Need Help?</div>
      </div>
      
    </div>
  )
}

export default Home
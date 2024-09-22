import React, { useEffect, useState } from 'react'


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

          chat ?  <div className='chat-chat flex fixed gap-3 flex-col z-20 h-[50%] right-[10px] top-[200px]'><iframe
        src="https://www.chatbase.co/chatbot-iframe/xflJLbzn1KAxo6U9lL9ry"
        width="100%"
        style={{ height: '60%', minHeight: '400px' }}
        title="Chatbot"
      ></iframe></div> : <></>
      }
     
      <div className="carausels-con flex-col gap-10 mb-16 flex items-center justify-center relative h-[500px] w-[100%] rounded-md"></div>

      <div className="z-10 chatbot-con flex items-center justify-center mr-10 flex-col bottom-[10px] self-end fixed h-[150px] w-[150px]">
        <div className="chatbot h-[120px] w-[120px] rounded-full relative bg-white">
          <img src="/chatbot.png" alt="" onClick={changeVisibility} />
          
        </div>
        <div className="text text-center text-color ml-10 text-lg font-bold">Need Help?</div>
      </div>
      
    </div>
  )
}

export default Home
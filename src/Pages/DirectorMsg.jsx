import React , {useState} from 'react'
import Chatbot from '../components/Chatbot'
const DirectorMsg = () => {
  const [chat, setChat] = useState(false);
  const changeVisibility =() =>{
    console.log(chat)
    setChat(!chat);
  }
  return (
    <>
      <div className="container relative top-[120px] m-auto min-h-[80vh] w-[100vw] mb-36 flex flex-col items-center justify-center gap-10">
        <h1 className="text-color text-center text-5xl font-bold uppercase">Director's Message</h1>
        <p className='text-xl font-bold p-1 mx-8 my-1' >
          “Orflax India has always stood for excellence, innovation, and integrity. Since our inception, we have embarked on a journey of growth, driven by a relentless pursuit of quality and customer satisfaction. Today, I am proud to say that we have not only met but exceeded our goals, becoming a trusted name in the field of wires and cables manufacturing.”
        </p>
        <p className='text-xl font-bold p-1 mx-8 my-1' >
          “Orflax India has always stood for excellence, innovation, and integrity. Since our inception, we have embarked on a journey of growth, driven by a relentless pursuit of quality and customer satisfaction. Today, I am proud to say that we have not only met but exceeded our goals, becoming a trusted name in the field of wires and cables manufacturing.”
        </p>
        {

          chat ? <Chatbot /> : <></>
        }

        <div className="z-10 cursor-pointer chatbot-con flex items-center justify-center mr-6 flex-col bottom-[10px] self-end fixed h-[150px] w-[150px]">
          <div className="chatbot h-[100px] w-[100px] rounded-full relative">
            <img src="/chatbot.png" alt="" onClick={changeVisibility} />

          </div>
          <div className="text text-center ml-10 text-lg font-extrabold text-color">Need Help?</div>
        </div>
      </div>
    </>
  )
}

export default DirectorMsg
import React , {useEffect, useState} from 'react'

const Home = () => {
  // const [carausel , setCaraousel] = useState(1);
  // const arr = [1,2,3]

  // const changeNumber = () =>{
  //   if(carausel < arr.length){
  //     setCaraousel(carausel => carausel+1);
  //   }
  //   else if(carausel == arr.length){
  //     setCaraousel(carausel => carausel-2)
  //   }
  // }
  // setInterval(changeNumber, 3000)

  // useEffect(()=>{

  //   return clearInterval(changeNumber);

  // } , [carausel])

  return (
    <div id='Home' className='Home-container min-h-[84vh] w-[100vw] m-auto flex flex-col items-center'>
      {/* carausols */}
      <div className="carausels-con flex-col gap-10 mb-16 flex items-center justify-center bg-blue-400 relative h-[600px] w-[88%] rounded-md">

        {/* {
          <img src="https://orflaxindia.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-10-at-7.37.09-PM.jpeg" alt="" className=' rounded-md absolute h-[100%] w-[100%]' />
        } */}

        {/* {
          <img src="https://orflaxindia.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-24-at-11.05.49-PM-768x390.jpeg" alt="" className=' rounded-md absolute h-[100%] w-[100%]' />
        } */}

        {/* {
          <img src="https://orflaxindia.com/wp-content/uploads/2023/08/img1-768x273.jpeg" alt="" className=' rounded-md absolute h-[100%] w-[100%]' />
        } */}
        


        {/* <h2 className="text-black font-semibold text-4xl">
          World's Leading Cable Wire Industry
        </h2>
        <h1 className="text-color font-bold uppercase text-6xl">
          Orflax
        </h1>
        <div className="btn call-now h-[50px] w-[150px] text-white font-semibold flex items-center justify-center cursor-pointer rounded-md">
          <a href="">Call Now</a>
        </div> */}
      </div>


    </div>
  )
}

export default Home
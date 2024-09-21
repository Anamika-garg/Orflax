import React from 'react'
import {whyUs} from '../../data'
import WhyUsCard from './WhyUsCard'
const WhyUs = () => {
  return (
    <div className='why-us my-2 container m-auto flex flex-wrap items-center gap-10 flex-col min-h-[40vh] w-[100vw]'>
        <div className="main-heading text-color text-5xl text-center font-bold my-9">Why Choose Us?</div>
        <div className="cards-con flex flex-wrap items-center justify-center gap-10 relative min-h-[80%] w-[100%]">
           {
            whyUs ? whyUs.map((e)=>{
                return <WhyUsCard title={e.title} desc={e.desc} key={e.id}/>
            }) : <></>
           }
        </div>
    </div>
  )
}

export default WhyUs
import React from 'react'
import { Link } from 'react-router-dom'
const NeedHelp = () => {
  return (
    <div className='m-auto mt-10 container min-h-[20vh] gap-3 w-[100vw] flex-wrap flex items-center justify-center border-t-4 border-yellow-600'>
        <div className="text text-2xl font-bold text-center flex items-center justify-center relative h-[50px]">Need Help with Easier Industrial Solutions? We Are Experts!</div>
        <Link to = {'/About'}><div className="flex items-center justify-center rounded-md btn p-4 h-[50px] w-[150px]">Know More</div></Link>
    </div>
  )
}

export default NeedHelp
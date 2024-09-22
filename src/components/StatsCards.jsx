import React from 'react'

const StatsCards = ({title , number , img}) => {
    return (
        <>
            <div className="text-white font-bold cards flex items-center flex-col justify-center h-[300px] w-[300px]">
                <div className="logo flex items-center justify-center elative h-[35%] w-[100%]">
                    <img src={img} className='size-15' alt="" />
                </div>
                <div className="text flex flex-col gap-2 items-center justify-center h-[50%] w-[100%]">
                    <div className="number text-5xl">{number}</div>
                    <div className="heading text-center text-2xl capitalize font-semibold">{title}</div>
                </div>
            </div>
        </>
    )
}

export default StatsCards
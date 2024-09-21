import React from 'react'

const WhyUsCard = ({title , desc}) => {
    return (
        <div className="card relative flex items-center justify-center flex-col flex-wrap gap-7 border-yellow-500 border-2 min-h-[300px] w-[350px]">
            <div className="title text-3xl font-semibold uppercase text-center">{title}</div>
            <p className="content p-3">{desc}</p>
        </div>
    )
}

export default WhyUsCard
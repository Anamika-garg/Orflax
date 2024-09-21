import React from 'react'
import StatsCards from './StatsCards';
import {data} from '../../data'

const Stats = () => {
    return (
        <div id='Stats' className='mt-9 stats-container rounded-md container m-auto bg-green-600 gap-9 w-[100vw] min-h-[50vh] flex items-center justify-center flex-wrap'>
            {
                data.map((e)=>{
                    return <StatsCards key={e.id} title = {e.title} number = {e.number} img={e.img}/>
                })
            }
        </div>
    )
}

export default Stats
import React, { useEffect, useState } from 'react';
import { previousOrders } from '../../data';
import PreviousItem from './previousItem';

const PreviousOrders = () => {
    const [showLess , setShowLess] = useState(true);
    const [previousData, setPreviousData] = useState(previousOrders);

    const changeHandler = () =>{
        setShowLess(!showLess);
    }

    useEffect(()=>{
        if(!showLess){
            setPreviousData(data => previousOrders);
        }
        else{
            setPreviousData(data => previousData.slice(0,3))
        }
    } , [showLess])
    return (
        <div className="Previous-Orders-Container container">
            <div className="text-center main-heading head-color head-size"> Your Previous Orders </div>
            <div className="previous-card-container">
                {
                    previousData ? previousData.map((e) => {
                        return <PreviousItem key={e.id} itemName={e.itemName} itemDesc={e.itemDesc} img={e.img} date={e.date} />
                    }) : <></>
                }

            </div>
                <button className='showAll' onClick={changeHandler} >Show {showLess ? 'All' : 'Less'}</button>
        </div>
    )
}

export default PreviousOrders
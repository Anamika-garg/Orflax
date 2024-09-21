import React, { useState } from 'react'

const ProductCard = ({id , img , title , desc , pData}) => {

    const [toggle , SetToggle] = useState(false);
    // const 
    const ShowId = () =>{
        SetToggle(!toggle);
    }
    return (
        <div className='product-card flex items-center relative min-h-[230px] w-[100%] rounded-md flex-wrap border-yellow-600 border-y-2 border-x-2 p-3'>
            <div className="product-img relative w-[220px] min-h-[230px] rounded-md flex items-center justify-center">
                <img className='relative h-[100%] w-[290px]' src={img} alt={title} />
            </div>
            <div className="product-desc relative w-[80%] min-h-[230px] rounded-md flex justify-center p-4 text-xl text-slate-900 flex-col">
                <div className="title text-5xl font-bold text-left mb-3">{title}</div>
               {desc}

               {
                toggle ? pData.map((e)=>{
                    return <div key={e.id} className='relative h-[100px] w-[100%] bg-red-800'>
                        <img src={e.img}></img>
                    </div>
                }) : <></>
               }


               {
                toggle ? <div className="btn know-more p-2 mt-3 relative w-[130px] rounded-md" onClick={ShowId}> Hide </div> : <div className="btn know-more p-2 mt-3 relative w-[130px] rounded-md" onClick={ShowId}>Know More</div>
               }

            </div>
        </div>
    )
}

export default ProductCard
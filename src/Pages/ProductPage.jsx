import React from 'react'
import ProductCard from '../components/ProductCard'
import {productData} from '../../data'

const ProductPage = () => {

    return (
        <div className='container mb-8 w-[100vw] gap-24 min-h-[130vh] m-auto flex flex-col items-center'>
            <div className="productPage font-semibold min-h-[250px] w-[100vw] top-[80px] main-heading flex items-center justify-center relative text-color text-5xl">
                Products
            </div>

            <div className="content gap-6 flex flex-col w-[100%] relative min-h-[100vh]">
                <h1 className='text-5xl font-bold mb-10 ml-12 mt-8 '>CABLES</h1>
                <div className="products-cables w-[100%] relative min-h-[90vh] mb-4 rounded-md gap-16 flex flex-col flex-wrap">
                    {
                        productData ? productData.map((e)=>{
                            return <ProductCard key={e.id} id={e.id} img={e.img} title={e.title} desc={e.desc} pData = {e.pData}/>
                        }) : <></>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductPage
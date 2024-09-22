import React , {useState} from 'react';
import ProductCard from '../components/ProductCard'
import { productData } from '../../data'
import Chatbot from '../components/Chatbot';
import p1 from '/product1.png'
import p2 from '/product2.png'

const ProductPage = () => {


  const [chat, setChat] = useState(false);
  const changeVisibility = () => {
    console.log(chat)
    setChat(!chat);
  }

    return (
        <div className='container product-container mb-8 w-[100vw] gap-24 min-h-[130vh] m-auto flex flex-col items-center'>
            <div className="productPage font-semibold min-h-[250px] w-[100vw] top-[80px] main-heading flex items-center justify-center relative text-color text-5xl">
                Products
            </div>

            <div className="content gap-6 flex flex-col w-[100%] relative min-h-[100vh]">
                <h1 className='text-5xl font-bold mb-10 ml-12 mt-8 text-black '>CABLES</h1>
                <div className="products-cables w-[100%] relative min-h-[90vh] items-center justify-center mb-4 rounded-md gap-16 flex flex-col flex-wrap">
                    {
                        productData ? productData.map((e) => {
                            return <ProductCard key={e.id} id={e.id} img={e.img} title={e.title} desc={e.desc} pData={e.pData} />
                        }) : <></>
                    }
                </div>

                <div className="our-innovation flex w-100vw relative flex-col min-h-[60vh] items-center justify-around">
                    <h1 className="main-heading text-color text-4xl font-bold text-center w-[100%]">
                        Our Innovations
                    </h1>
                    <div className="text-2xl font-bold my-2 text-center">
                    ALUMINIUM ROUND CABLE, MULTIPLE CONDUCTOR
                    </div>
                    <div className="img-con flex relative w-[80%] items-center justify-center min-h-[500px] flex-wrap">
                        <img src={p1} alt="" className='relative h-[100%] w-[500px]' />
                        <img src={p2} alt="" className='relative h-[100%] w-[500px]' />
                    </div>
                </div>
            </div>



            {/* Chatbot */}
            {

                chat ? <Chatbot /> : <></>
            }
            <div className="z-10 cursor-pointer chatbot-con flex items-center justify-center rounded-full mr-0 flex-col bottom-[10px] self-end fixed h-[180px] w-[150px]">
                <div className="chatbot h-[100px] w-[100px] rounded-full relative">
                    <img src="/chatbot.png" alt="" onClick={changeVisibility} />

                </div>
                <div className="text text-center text-white ml-10 text-lg font-bold">Need Help?</div>
            </div>

        </div>
    )
}

export default ProductPage
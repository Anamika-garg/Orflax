import React, { useState } from 'react'

const images = [
    "https://orflaxindia.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-10-at-7.37.09-PM.jpeg",
    "https://orflaxindia.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-24-at-11.05.49-PM-768x390.jpeg",
    "https://orflaxindia.com/wp-content/uploads/2023/08/img1-768x273.jpeg",
];

function Carousel() {
    const [current, setCurrent] = useState(0);

    function nextSlide() {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    }
   
    function prevSlide() {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    }
    return (
        <div>
            <div className="slider relative h-[100%] w-[90vw] flex justify-evenly p-5 items-center">
                <div className="left-arrow hover:bg-gray-400 hover:text-white p-2 rounded-lg cursor-pointer" onClick={prevSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </div>
                {images.map(
                    (image, index) =>
                        current === index && (
                            <div key={image} className="slide flex justify-center w-[100%] relative">
                                <img className='w-[100%] rounded-2xl h-[100%]' src={image} alt="images" />
                            </div>
                        )
                )}
                <div className="right-arrow hover:bg-gray-400 hover:text-white p-2 rounded-lg cursor-pointer" onClick={nextSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Carousel
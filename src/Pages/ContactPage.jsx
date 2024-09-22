import React, { useState } from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";

import Chatbot from '../components/Chatbot';

const ContactPage = () => {


    const [chat, setChat] = useState(false);
    const changeVisibility = () => {
        console.log(chat)
        setChat(!chat);
    }
    return (
        <div className='container min-h-[100vh] w-[100vw] m-auto flex flex-col items-center mb-16'>
            <div className="contactPage flex items-center justify-center relative top-[83px] w-[100vw] min-h-[300px]">
                {/* <div className="main-heading text-color text-5xl uppercase font-bold">Contact US</div> */}
            </div>

            <div className="gap-10 contact-sec-1 contact-content relative top-[80px] mb-9 flex p-5 items-center flex-col flex-wrap my-4 w-[100%] min-h-[40vh]">
                <div className="main-heading text-center text-color text-5xl uppercase font-bold">Contact US</div>
                <div className="button-sec w-[90%] relative min-h-[100px] flex items-center justify-center gap-10 flex-wrap">
                    <button className="contact-btn flex border-4 border-yellow-200 hover:bg-yellow-300 transition-all h-[60px] w-[210px] p-5 items-center justify-center font-semibold text-lg">Product Enquiry</button>
                    <button className="contact-btn flex border-4 border-yellow-200 hover:bg-yellow-300 transition-all h-[60px] w-[210px] p-5 items-center justify-center font-semibold text-lg">Dealership Request</button>
                    <button className="contact-btn flex border-4 border-yellow-200 hover:bg-yellow-300 transition-all h-[60px] w-[210px] p-5 items-center justify-center font-semibold text-lg">Product Complaint</button>
                </div>
                <div className="contact-content flex flex-col gap-0 p-3 relative min-h-[340px] w-[100%]">
                    <div className="text-4xl font-bold mb-8 relative left-[40px]">Contact</div>
                    <div className="flex relative h-[70px] w-[100%]">
                        <div className="logo relative w-[10%] h-[100%] flex items-center justify-center"> <IoLocationSharp className='h-[30px] w-[40px]' /> </div>
                        <div className="content relative flex items-center justify-center p-4 flex-wrap">B-42/15 Jhilmil Industrial Area , G.T.Road , Delhi 110 095</div>
                    </div>
                    <div className="flex relative h-[70px] w-[100%]">
                        <div className="logo relative w-[10%] h-[100%] flex items-center justify-center"> <CgMail className='h-[30px] w-[40px]' /> </div>
                        <div className="content relative flex items-center justify-center p-4 flex-wrap">Connect@orflaxindia.com</div>
                    </div>
                    <div className="flex relative h-[70px] w-[100%]">
                        <div className="logo relative w-[10%] h-[100%] flex items-center justify-center"> <FaPhoneAlt className='h-[30px] w-[40px]' /> </div>
                        <div className="content relative flex items-center justify-center p-4 flex-wrap">
                            +91 93134 93405 | +91 93136 66292 | +91 92051 93405 |
                            011-41523405</div>
                    </div>
                </div>
            </div>

            <div className="contact-sec-2 contact-map flex flex-col relative flex-wrap my-4 min-h-[70vh] w-[90%]">
                <div className="main-heading p-4 text-4xl uppercase font-bold">Our Location</div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.5329535340725!2d77.30984358129419!3d28.673699962837635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb0be4501b75%3A0x2ab3fcf5dbd2905e!2sAmbedkar%20Colony%2C%20Jhilmil%20Colony%20Industrial%20Area%2C%20Jhilmil%20Colony%2C%20Delhi%2C%20110095%2C%20India!5e0!3m2!1sen!2sus!4v1726905662331!5m2!1sen!2sus"
                    className='relative h-[400px] w-[100%]'
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

            </div>
            {/* Chatbot */}
            {

                chat ? <Chatbot /> : <></>
            }

            <div className="z-10 cursor-pointer chatbot-con flex items-center justify-center rounded-full mr-0 flex-col bottom-[10px] self-end fixed h-[180px] w-[150px]">
                <div className="chatbot h-[100px] w-[100px] rounded-full relative ">
                    <img src="/chatbot.png" alt="" onClick={changeVisibility} />

                </div>
                <div className="text text-center text-white ml-10 text-lg font-bold">Need Help?</div>
            </div>

        </div>
    )
}

export default ContactPage
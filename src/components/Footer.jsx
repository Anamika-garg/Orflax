import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";



const Footer = () => {
  return (
    <div className='footer-container flex items-center text-white justify-center min-h-[40vh] w-[100vw] bg-zinc-900 py-5'>
        <div className="footer flex flex-col relative min-h-[90%] w-[75%]">
            <div className="footer-sec-1 items-center justify-center flex w-[100%] relative min-h-[100px] gap-9">
                <div className="logo flex items-center justify-center min-h-[100%] relative w-[20%]">
                    <img src="https://orflaxindia.com/wp-content/uploads/2023/08/oipl-removebg-preview-208x74.png" alt="" />
                </div>
                <div className="content items-center justify-center flex h-[100%] relative w-[80%]">
                We are a North India based business group with wide range of copper and aluminium wires & cables. Masters in industrial manufacturing with  15 years of experience and 10+ awards!
                </div>
            </div>
            <div className="footer-sec-2 flex gap-10 items-center justify-center relative min-h-[100px] w-[100%]">
                <div className="text flex justify-around w-[100%] relative min-h-[90px]">
                    <ul className='footer-item flex items-center gap-4 relative min-h-[100%] w-[100%]'>
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#About">About</a></li>
                        <li><a href="#Contact">Contact</a></li>
                        <li><a href="#Product">Products</a></li>
                    </ul>
                    <ul className="footer-icon flex items-center gap-4 justify-end w-[40%] relative">
                        <li><a href="Twitter"><FaTwitter className='icons size-4 h-7 w-7'/></a></li>
                        <li><a href="Linkedin"><FaLinkedinIn className='icons size-4 h-7 w-7'/></a></li>
                        <li><a href="Whatsapp"><FaWhatsapp className='icons size-4 h-7 w-7'/></a></li>
                        <li><a href="Instagram"><FaInstagram className='icons size-4 h-7 w-7'/></a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-sec-3 flex items-center text-xl relative w-[100%] min-h-[30px]">
            Copyright 2024 © Orflax India Limited
            </div>
        </div>
    </div>
  )
}

export default Footer
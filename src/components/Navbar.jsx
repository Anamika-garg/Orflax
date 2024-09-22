import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [smallScreen, setSmallScreen] = useState(false)

    const changeHandler = () => {
        setSmallScreen(!smallScreen);
    }

    useEffect(() => {
        if (window.innerWidth > 800) {
            setSmallScreen(false)
        }
    }, [])

    return (
        <>
            <header className="fixed z-30 Navbar-container flex items-center justify-center w-[100vw] h-[80px]">
                <ul className="logo-sec flex items-center justify-center relative w-[30%] h-[100%]">
                    <li><a href="/">
                        <img className='h-[50px] w-auto' src="https://orflaxindia.com/wp-content/uploads/2023/08/oipl-removebg-preview-208x74.png" alt="" /> </a></li>
                </ul>
                <ul className="item-sec flex relative items-center justify-center w-[80%] h-[100%] gap-12 uppercase">
                    <li className='flex'><Link to="/About" className='p-4 text-base font-extrabold text-white rounded-md transition-all'>About us </Link></li>
                    <li className='flex'><Link to="/Products" className='p-4 text-base font-extrabold text-white rounded-md transition-all'>Products </Link></li>
                    <li className='flex'><Link to="/Contact" className='p-4 text-base font-extrabold text-white rounded-md transition-all'>Contact us </Link></li>
                    <li className='flex'><Link to="/Director-msg" className='p-4 text-base font-extrabold text-white rounded-md transition-all'>Director's Message </Link></li>

                </ul>
                <ul className="call-sec flex items-center gap-3 uppercase h-[100%] relative w-[20%]">
                    <li className='hamburger' onClick={changeHandler}><Link to=""> <GiHamburgerMenu className='hamburger' />  </Link></li>
                    <li className='call-btn flex'><Link className='btn flex items-center justify-center text-white p-4 h-[40px] text-base font-semibold rounded-md' href="" onClick={() => {
                        window.open('tel:9313666292')
                    }}>Call Now </Link></li>
                </ul>
            </header>


            {
                smallScreen ? <div className="container afterSmallScreen">
                    <nav onClick={changeHandler} className='afterSmallScreen-nav'>
                        <ul className='afterSmallScreen-ul'>
                            <li onClick={changeHandler}> <Link to="/">Home </Link> </li>
                            <li onClick={changeHandler}> <Link to="/About">About Us </Link> </li>
                            <li onClick={changeHandler}> <Link to="/Products">Products </Link> </li>
                            <li onClick={changeHandler}> <Link to="/Contact">Contact Us </Link> </li>
                            <li onClick={changeHandler}> <Link to="/Director-msg">Director's Message </Link> </li>
                            <li className='call-btn-mobile flex'><Link className='btn flex items-center text-base w-[230px] justify-center text-white p-4 h-[60px] font-semibold rounded-md' href="" onClick={() => {
                                window.open('tel:9313666292')
                            }}>Call Now </Link></li>
                        </ul>
                    </nav>
                </div> : <></>
            }
        </>
    )
}

export default Navbar
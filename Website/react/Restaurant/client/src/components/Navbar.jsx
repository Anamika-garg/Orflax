import React, { useEffect, useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import AddToCart from './AddToCart';

const Navbar = () => {
    const [smallScreen, setSmallScreen] = useState(false)

    const changeHandler = () => {
        setSmallScreen(!smallScreen);
    }

    useEffect(()=>{
        if(window.innerWidth > 800 ){
            setSmallScreen(false)
        }
    } ,[])
    return (
        <>
            <div className="navbar">
                <ul className="nav-ul logo-ul">
                    <li>
                        <a href="/">Logo</a>
                    </li>
                </ul>
                <ul className="nav-ul nav-items-ul">
                    <li> <a href="#Home">Home</a> </li>
                    <li> <a href="#Menu">Menu</a> </li>
                    <li> <a href="#Order">Order Now</a> </li>
                </ul>
                <ul className="nav-ul order-ul">
                    <li><a href="#cart"> <FaShoppingCart className='icon' /> </a></li>
                    <li><a href="#profile"> <CgProfile className='icon' /> </a></li>
                    <li className='hamburger' onClick={changeHandler}><a href="#profile"> <GiHamburgerMenu className='icon' /> </a></li>
                </ul>
            </div>
                <AddToCart/>

            {
                smallScreen ? <div className="container afterSmallScreen">
                    <nav onClick={changeHandler} className='afterSmallScreen-nav'>
                        <ul className='afterSmallScreen-ul'>
                        <li onClick={changeHandler}> <a href="#Home">Home</a> </li>
                        <li onClick={changeHandler}> <a href="#Menu">Menu</a> </li>
                        <li onClick={changeHandler}> <a href="#Order">Order Now</a> </li>
                        </ul>
                    </nav>
                </div> : <></>
            }
        </>
    )
}

export default Navbar
"use client";
import './Navbar.scss'
import React, {useState} from 'react'
// import Popup from '../modal/popup/Popup';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };


  const closePopup = () => {
    console.log("clicked")
    setIsPopupOpen(false);
  };


  
  return (
    <nav className="container">
        <img src="/logo.webp" width={51} height={62} alt='University of Ibadan'/>
        <div className="links">
            <a className="link_other" href="https://www.ui.edu.ng/">Homepage</a>
            
        </div>
        {/* {isPopupOpen && <Popup onClose={closePopup}/>} */}
        <AiOutlineMenu className="menu" onClick={() => setToggle(!toggle)}/>

        {toggle && 
        <div className="small_links">
        <AiOutlineClose className="close" onClick={() => setToggle(!toggle)}/>
        <div className="links_box">
        <a className="link" href="/about">About Project</a>
        <a className="link" href="/contact">Contact Us</a>
        <a onClick={openPopup} className="link_other" href="">Donate</a>
        
        </div>
        {/* {isPopupOpen && <Popup onClose={closePopup}/>} */}
    </div>
        }
    </nav>
  )
}

export default Navbar
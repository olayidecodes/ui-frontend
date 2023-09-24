import { FaArrowRight } from "react-icons/fa";
import "./donationStyle.css";
import LisThermo from "./Thermo";
import React, {useState} from 'react';
import Popup from './Popup';



const Donation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="DonationCon">
      <div className="head-Con">
        <h1>DONATION  LEADERBOARD</h1>

        <p>Check out the donation leaderboard and rep your halls of residence. 
          Remember to tell others from your hall to keep staying in first place 
          or move from your current position
        </p>
      </div>

      <LisThermo/>

      <div className="btns">
        <button onClick={togglePopup}>View All <FaArrowRight style={{marginLeft: "0.5rem"}}/></button>
        <Popup isOpen={isOpen} onClose={togglePopup} />
      </div>
      
    </div>
  )
}

export default Donation
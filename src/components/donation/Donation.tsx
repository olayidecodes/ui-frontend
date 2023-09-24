import { FaArrowRight } from "react-icons/fa";
import "./donationStyle.css";
import LisThermo from "./Thermo";
import React from 'react';

const Donation = () => {
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
        <button >View All <FaArrowRight style={{marginLeft: "0.5rem"}}/></button>
      </div>
    </div>
  )
}

export default Donation
import "./donationGoal.css"
import React from 'react'

const GoalDonation = () => {
  let goal = "$200,000,000.00";
  let amountRaised = "$50,986,908.999";

  return (
    <div className="goalContainer">
      <img src="/toppat.png" alt="top pattern" className="toppat"/>
      <img src="/cornerpat.png" alt="cornerppattern" className="conpat"/>
        <div className="toptext">
            <h1>DONATION GOAL</h1>
            <p>Our goal is to reach about Two Hundred million dollars ($200,000,00.00) 
                before the start of the University’s 75th Anniversary.
            </p>
        </div>

            <div className="donationBar">
              <span className="donate-per">
                <span className="tooltip">51%</span>
              </span>
            </div>

            <div className="raised">
              <span>{amountRaised} </span>raised of <span> {goal}</span>
            </div>
    </div>
  )
}

export default GoalDonation
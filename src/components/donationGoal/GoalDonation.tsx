// import React from 'react';
// import "./donationGoal.css"

// interface DonationProgressBarProps {
//   goal: any;
//   currentAmount: any
// }

// const GoalDonation: React.FC<DonationProgressBarProps> = ({ goal, currentAmount }) => {
//   const currentAmounts = currentAmount.replace(/[^0-9]/g, '');
//   const goals = goal.replace(/[^0-9]/g, ''); // You can set the current amount as needed

//   const percentRaised = ((currentAmounts / goals) * 100).toFixed(2);

//   return (
//     <div className="goalContainer">
//       <img src="/toppat.png" alt="top pattern" className="toppat"/>
//        <img src="/cornerpat.png" alt="cornerppattern" className="conpat"/>
//         <div className="toptext">
//             <h1>DONATION GOAL</h1>
//           <p>Our goal is to reach about Two Hundred million dollars ($200,000,00.00) 
//                 before the start of the University’s 75th Anniversary.
//           </p>
//         </div>

//       <div className="progress-container">
//         <div
//           className="progress-bar"
//           style={{
//             '--percentRaised': `${percentRaised}%`,
//             animationDuration: '5s', // You can adjust the animation speed here
//           }}
//         >
//               <div className="circle1">
//                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 54 54" fill="none">
//                    <circle cx="27.0081" cy="27" r="27" fill="#E56363"/>
//                  </svg>
//                </div>
//                <div className="circle2">
//                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 54 54" fill="none">
//                    <circle cx="27.0081" cy="27" r="27" fill="#E56363"/>
//                  </svg>
//                </div>

//                <div className="circle3">
//                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 54 54" fill="none">
//                    <circle cx="27.0081" cy="27" r="27" fill="#E56363"/>
//                  </svg>
//                </div>

//           <span className="tooltip">{percentRaised}%</span>
//         </div>
//       </div>

//       <div className="raised">
//         <span className="amtraised">{currentAmount} /</span><span> {goal}</span>
//       </div>
//     </div>
//   );
// };

// export default GoalDonation;


import React, { useEffect, useState } from 'react';
import './donationGoal.css';

interface DonationProgressBarProps {
  goal: any;
  currentAmount: any;
}

const GoalDonation: React.FC<DonationProgressBarProps> = ({ goal, currentAmount }) => {
  const currentAmounts = currentAmount.replace(/[^0-9]/g, '');
  const goals = goal.replace(/[^0-9]/g, '');

  const percentRaised = ((currentAmounts / goals) * 100).toFixed(2);
  const [animatedWidth, setAnimatedWidth] = useState(0);

  useEffect(() => {
    const animationSpeed = 2000;

    if (currentAmount <= goal) {
      const interval = setInterval(() => {
        setAnimatedWidth((prevWidth) => {
          const nextWidth = (currentAmount / goal) * 100;
          const step = 1;
          return prevWidth + step <= nextWidth ? prevWidth + step : nextWidth;
        });
      }, animationSpeed / 100);

      return () => {
        clearInterval(interval);
      };
    } else {
      setAnimatedWidth(100);
    }
  }, [goal, currentAmount]);

  // Dynamically set the CSS custom property using JavaScript
  const progressBarStyle = {
    width: `${animatedWidth}%`,
    '--percentRaised': `${percentRaised}%`,
  };

  return (
    <div className="goalContainer">
      <img src="/toppat.png" alt="top pattern" className="toppat" />
      <img src="/cornerpat.png" alt="corner pattern" className="conpat" />
      <div className="toptext">
        <h1>DONATION GOAL</h1>
        <p>
          Our goal is to reach about Two Hundred million dollars ($200,000,00.00) before the start of the University’s 75th Anniversary.
        </p>
      </div>

      <div className="progress-container">
        <div className="progress-bar" style={progressBarStyle}>
          <div className="circle1">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 54 54" fill="none">
              <circle cx="27.0081" cy="27" r="27" fill="#E56363" />
            </svg>
          </div>
          <div className="circle2">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 54 54" fill="none">
              <circle cx="27.0081" cy="27" r="27" fill="#E56363" />
            </svg>
          </div>

          <div className="circle3">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 54 54" fill="none">
              <circle cx="27.0081" cy="27" r="27" fill="#E56363" />
            </svg>
          </div>

          <span className="tooltip">{percentRaised}%</span>
        </div>
      </div>

      <div className="raised">
        <span className="amtraised">{currentAmount} /</span>
        <span> {goal}</span>
      </div>
    </div>
  );
};

export default GoalDonation;
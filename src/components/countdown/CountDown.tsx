import React, { useState, useEffect } from 'react';
import './Countdown.scss'; // Import your SCSS file for styling

const Countdown = () => {
	const targetDate: Date = new Date('2023-11-14T00:00:00Z'); // Set your target date and time

	const calculateTimeLeft = (): { days: number, hours: number, minutes: number, seconds: number } => {
	  const now: Date = new Date();
	  const difference: number = targetDate.getTime() - now.getTime();
	  
	  if (difference <= 0) {
		return { days: 0, hours: 0, minutes: 0, seconds: 0 };
	  }
	  
	  const days: number = Math.floor(difference / (1000 * 60 * 60 * 24));
	  const hours: number = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	  const minutes: number = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
	  const seconds: number = Math.floor((difference % (1000 * 60)) / 1000);
	  
	  return { days, hours, minutes, seconds };
	};
	

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown">
      <div className="countdown-item">
        <span className="countdown-value">{timeLeft.days}</span>
        <span className="countdown-label">Days</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-value">{timeLeft.hours}</span>
        <span className="countdown-label">Hours</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-value">{timeLeft.minutes}</span>
        <span className="countdown-label">Minutes</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-value">{timeLeft.seconds}</span>
        <span className="countdown-label">Seconds</span>
      </div>
    </div>
  );
};

export default Countdown;

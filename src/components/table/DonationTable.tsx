import React from 'react';
import "./donateStyle.css";

interface DonationData{
  position: number;
  hallName: string;
  amountDonated: number;
  numOfDonation: number;
}

const DonationTable: React.FC = () => {
   const leaderBoard: DonationData[] = [
    { position: 1, hallName: 'Kenneth Mellanby Hall', amountDonated: 152342345.06, numOfDonation: 305 },
    { position: 2, hallName: 'Queen Elizabeth II Hall', amountDonated: 152342345.06, numOfDonation: 295 },
    { position: 3, hallName: 'Queen Idia Hall', amountDonated: 152342345.06, numOfDonation: 285 },
    { position: 4, hallName: 'Sultan Bello Hall', amountDonated: 152342345.06, numOfDonation: 275 },
    { position: 5, hallName: 'Nnamdi Azikwe Hall', amountDonated: 152342345.06, numOfDonation: 245 },
    { position: 6, hallName: 'Independence Hall', amountDonated: 152342345.06, numOfDonation: 205 },
    { position: 7, hallName: 'Ransome Kuti Hall', amountDonated: 152342345.06, numOfDonation: 195 },
    { position: 8, hallName: 'Obafemi Awolowo Hall', amountDonated: 152342345.06, numOfDonation: 175 },
    { position: 9, hallName: 'Lord Tedder Hall', amountDonated: 152342345.06, numOfDonation: 155 },
    { position: 10, hallName: 'Alexander Brown Hall', amountDonated: 152342345.06, numOfDonation: 154 },
    { position: 11, hallName: 'Post graduate Hall', amountDonated: 152342345.06, numOfDonation: 145 }
  ];

  // Step 1: Sort the leaderBoard array based on amountDonated
  const sortedLeaderBoard = [...leaderBoard].sort((a, b) => b.amountDonated - a.amountDonated);


  // Step 2: Update the position property
  const updatedLeaderBoard = sortedLeaderBoard.map((data, index) => ({
    ...data,
    position: index + 1,
  }));

  
  return (
    <div className='leaderBoardContainer'>
      <div className="leaderBoard">
        <ul className='boardHead'>
          <li>Position</li>
          <li>Hall of Residence</li>
          <li>Amount Donated</li>
          <li>Number of Donations</li>
        </ul>
      
        <div className="gaps">
          {/* loopiing through the leader board detials */}
          {
            updatedLeaderBoard.map((data) => {
              return(
                <ul className='boardBody' key={data.position}>
                  <li>{data.position}</li>
                  <li className='left'>{data.hallName}</li>
                  <li className='left2'>₦{data.amountDonated.toLocaleString("en-US")}</li>
                  <li>{data.numOfDonation}</li>
                </ul>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default DonationTable
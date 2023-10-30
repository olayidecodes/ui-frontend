import { FaSortDown, FaSortUp } from "react-icons/fa";
import React, { useState, useEffect } from 'react';
import "./style.css"

interface DonationData {
  position: number;
  hallName: string;
  amountDonated: string;
  numOfDonation: number;
  step: number;
}

const DonationTable: React.FC = () => {
  const initialData: DonationData[] = [
    { position: 1, hallName: 'Kenneth Mellanby Hall', amountDonated: "₦152,342,345.06", numOfDonation: 305, step: 0 },
    { position: 2, hallName: 'Queen Elizabeth II Hall', amountDonated: "₦152,342,345.06", numOfDonation: 295, step: 0 },
    { position: 3, hallName: 'Queen Idia Hall', amountDonated: "₦152,342,345.06", numOfDonation: 285, step: 0 },
    { position: 4, hallName: 'Sultan Bello Hall', amountDonated: "₦152,342,345.06", numOfDonation: 275, step: 0 },
    { position: 5, hallName: 'Nnamdi Azikwe Hall', amountDonated: "₦152,342,345.06", numOfDonation: 245, step: 0 },
    { position: 6, hallName: 'Independence Hall', amountDonated: "₦152,342,345.06", numOfDonation: 205, step: 0 },
    { position: 7, hallName: 'Ransome Kuti Hall', amountDonated: "₦152,342,345.06", numOfDonation: 195, step: 0 },
    { position: 8, hallName: 'Obafemi Awolowo Hall', amountDonated: "₦152,342,345.06", numOfDonation: 175, step: 0 },
    { position: 9, hallName: 'Lord Tedder Hall', amountDonated: "₦152,342,345.06", numOfDonation: 155, step: 0 },
    { position: 10, hallName: 'Alexander Brown Hall', amountDonated: "₦152,342,345.06", numOfDonation: 154, step: 0 },
    { position: 11, hallName: 'Nnamdi Azikwe Hall2', amountDonated: "₦152,342,345.06", numOfDonation: 145, step: 0 }
  ];


  const [sortedData, setSortedData] = useState<DonationData[]>(initialData);

  useEffect(() => {
    // Sort data by amount donated in descending order
    const sorted = [...sortedData].sort((a, b) =>
      parseInt(b.amountDonated.replace(/[^0-9]/g, ''), 10) - parseInt(a.amountDonated.replace(/[^0-9]/g, ''), 10)
    );

    // Update positions and steps
    const updatedData = sorted.map((row, index) => {
      let steps = 0;
      if (index > 0) {
        if (parseInt(row.amountDonated.replace(/[^0-9]/g, ''), 10) === parseInt(sortedData[index - 1].amountDonated.replace(/[^0-9]/g, ''), 10)) {
          steps = sortedData[index - 1].step;
        } else {
          steps = sortedData[index - 1].step + 1;
        }
      } else {
        steps = 0; // For the first row, steps should be 0
      }
      return { ...row, position: index + 1, step: steps };
    });

    setSortedData(updatedData);
  }, [sortedData]);

  return (
    <div className="tableContainer">
      <ul className="responsive-table">
        <li className="table-header">
          <div className="col col-1">Position</div>
          <div className="col col-2">Hall Of Residence</div>
          <div className="col col-3">Amount Donated</div>
          <div className="col col-3">Number Of Donations</div>
          <div className="col col-4">Steps</div>
        </li>
        {sortedData.map((row, index) => {
          let movementContent = null;
          let steps = 0;
    
          if (index > 0) {
            steps = row.step - sortedData[index - 1].step;
            if (steps > 0) {
              movementContent = <FaSortUp style={{ color: 'green' }} />;
            } else if (steps < 0) {
              movementContent = <FaSortDown style={{ color: 'red' }} />;
            }
          }
    
          return (
            <li className="table-row" key={row.position}>
              <div className="col col-1" data-label="Job Id">{row.position}</div>
              <div className="col col-2" data-label="Customer Name">{row.hallName}</div>
              <div className="col col-3" data-label="Amount">{row.amountDonated}</div>
              <div className="col col-4" data-label="Payment Status">{row.numOfDonation}</div>
              <div className="col col-5" data-label="Payment Status">{movementContent && (
                <>
                  {movementContent} {Math.abs(steps)} step{Math.abs(steps) !== 1 ? 's' : ''}
                </>
              )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DonationTable;
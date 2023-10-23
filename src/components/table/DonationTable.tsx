// import { FaSortDown, FaSortUp } from "react-icons/fa";
// import React, { useState, useEffect } from 'react';
// import "./style.css"

// interface DonationData {
//   position: number;
//   hallName: string;
//   amountDonated: string;
//   numOfDonation: number;
//   step: number;
// }

// const DonationTable: React.FC = () => {
//   const initialData: DonationData[] = [
//     { position: 1, hallName: 'Kenneth Mellanby Hall', amountDonated: "#152,342,345.06", numOfDonation: 305, step: 1 },
//     { position: 2, hallName: 'Queen Elizabeth II Hall', amountDonated: "#152,342,345.06", numOfDonation: 295, step: 2 },
//     { position: 3, hallName: 'Queen Idia Hall', amountDonated: "#152,342,345.06", numOfDonation: 285, step: 3 },
//     { position: 4, hallName: 'Sultan Bello Hall', amountDonated: "#152,342,345.06", numOfDonation: 275, step: 4 },
//     { position: 5, hallName: 'Nnamdi Azikwe Hall', amountDonated: "#152,342,3455.06", numOfDonation: 245, step: 5 },
//     { position: 6, hallName: 'Independence Hall', amountDonated: "#152,342,345.06", numOfDonation: 205, step: 6 },
//     { position: 7, hallName: 'Ransome Kuti Hall', amountDonated: "#152,342,345.06", numOfDonation: 195, step: 7 },
//     { position: 8, hallName: 'Obafemi Awolowo Hall', amountDonated: "#152,342,345.06", numOfDonation: 175, step: 8 },
//     { position: 9, hallName: 'Lord Tedder Hall', amountDonated: "#152,342,348.06", numOfDonation: 155, step: 9 },
//     { position: 10, hallName: 'ABH', amountDonated: "#152,342,345.06", numOfDonation: 154, step: 10 },
//     { position: 11, hallName: 'Nnamdi Azikwe Hall', amountDonated: "#152,342,347.06", numOfDonation: 145, step: 11 }
//   ];

//   const [sortedData, setSortedData] = useState<DonationData[]>(initialData);

//   useEffect(() => {
//     const sorted = [...sortedData].sort((a, b) => parseInt(b.amountDonated.replace(/[^0-9]/g, ''), 10) - parseInt(a.amountDonated.replace(/[^0-9]/g, ''), 10));
//     const updatedData = sorted.map((row, index) => ({ ...row, position: index + 1 }));
//     setSortedData(updatedData);
//   }, [sortedData]);

//   useEffect(() => {
//     // Simulate a new donation when there is a change in the amount donated
//     const updatedData = [...sortedData];
//     updatedData.forEach((row, index) => {
//       if (index > 0) {
//         const isGreaterThanPrevious = parseInt(row.amountDonated.replace(/[^0-9]/g, ''), 10) > parseInt(updatedData[index - 1].amountDonated.replace(/[^0-9]/g, ''), 10);

//         if (isGreaterThanPrevious) {
//           // Move the hall to the top
//           updatedData.splice(index, 1);
//           updatedData.unshift(row);
//         }
//       }
//     });

//     setSortedData(updatedData);
//   }, [sortedData]);

//   return (
//     <table className="custom-table">
//       <thead>
//         <tr>
//           <th>Position</th>
//           <th>Hall Of Residence</th>
//           <th>Amount Donated</th>
//           <th>Number Of Donations</th>
//           <th></th>
//         </tr>
//       </thead>
//       <tbody>
//         {sortedData.map((row, index) => {
//           let movementContent = null;

//           if (index > 0) {
//             const steps = Math.abs(row.position - sortedData[index - 1].position);
//             movementContent = row.position > sortedData[index - 1].position ? <FaSortUp style={{ color: 'green' }} /> : <FaSortDown style={{ color: 'red' }} />;

//             return (
//               <tr key={row.position}>
//                 <td>{row.position}</td>
//                 <td>{row.hallName}</td>
//                 <td>{row.amountDonated}</td>
//                 <td>{row.numOfDonation}</td>
//                 <td>
//                   {movementContent && (
//                     <>
//                       {movementContent} {steps} steps
//                     </>
//                   )}
//                 </td>
//               </tr>
//             );
//           }

//           return (
//             <tr key={row.position}>
//               <td>{row.position}</td>
//               <td>{row.hallName}</td>
//               <td>{row.amountDonated}</td>
//               <td>{row.numOfDonation}</td>
//               <td></td>
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// };

// export default DonationTable;


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
    { position: 1, hallName: 'Kenneth Mellanby Hall', amountDonated: "#152,342,345.06", numOfDonation: 305, step: 1 },
    { position: 2, hallName: 'Queen Elizabeth II Hall', amountDonated: "#152,342,345.06", numOfDonation: 295, step: 2 },
    { position: 3, hallName: 'Queen Idia Hall', amountDonated: "#152,342,345.06", numOfDonation: 285, step: 3 },
    { position: 4, hallName: 'Sultan Bello Hall', amountDonated: "#152,342,345.06", numOfDonation: 275, step: 4 },
    { position: 5, hallName: 'Nnamdi Azikwe Hall', amountDonated: "#152,342,345.06", numOfDonation: 245, step: 5 },
    { position: 6, hallName: 'Independence Hall', amountDonated: "#152,342,345.06", numOfDonation: 205, step: 6 },
    { position: 7, hallName: 'Ransome Kuti Hall', amountDonated: "#152,342,345.06", numOfDonation: 195, step: 7 },
    { position: 8, hallName: 'Obafemi Awolowo Hall', amountDonated: "#152,342,545.06", numOfDonation: 175, step: 8 },
    { position: 9, hallName: 'Lord Tedder Hall', amountDonated: "#152,342,348.06", numOfDonation: 155, step: 9 },
    { position: 10, hallName: 'ABH', amountDonated: "#152,342,345.06", numOfDonation: 154, step: 10 },
    { position: 11, hallName: 'Nnamdi Azikwe Hall', amountDonated: "#152,342,347.06", numOfDonation: 145, step: 11 }
  ];

  const [sortedData, setSortedData] = useState<DonationData[]>(initialData);

  useEffect(() => {
    // Sort data by amount donated in descending order
    const sorted = [...sortedData].sort((a, b) =>
      parseInt(b.amountDonated.replace(/[^0-9]/g, ''), 10) - parseInt(a.amountDonated.replace(/[^0-9]/g, ''), 10)
    );

    // Update positions
    const updatedData = sorted.map((row, index) => ({ ...row, position: index + 1 }));
    setSortedData(updatedData);
  }, [sortedData]);

  useEffect(() => {
    // Find the hall with the highest donation
    const highestDonation = Math.max(...sortedData.map((row) => parseInt(row.amountDonated.replace(/[^0-9]/g, ''), 10)));

    // Update positions and move the hall to position 1
    const updatedData = sortedData.map((row, index) => {
      const donationAmount = parseInt(row.amountDonated.replace(/[^0-9]/g, ''), 10);
      return {
        ...row,
        position: donationAmount === highestDonation ? 1 : index + 1,
      };
    });

    // Sort the data again to handle ties
    const sorted = updatedData.sort((a, b) => a.position - b.position);

    setSortedData(sorted);
  }, [sortedData]);

  return (
    <table className="custom-table">
      <thead>
        <tr>
          <th>Position</th>
          <th>Hall Of Residence</th>
          <th>Amount Donated</th>
          <th>Number Of Donations</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row, index) => {
          let movementContent = null;

          if (index > 0) {
            const steps = Math.abs(row.position - sortedData[index - 1].position);
            movementContent = row.position > sortedData[index - 1].position ? (
              <FaSortUp style={{ color: 'green' }} />
            ) : (
              <FaSortDown style={{ color: 'red' }} />
            );

            return (
              <tr key={row.position}>
                <td>{row.position}</td>
                <td>{row.hallName}</td>
                <td>{row.amountDonated}</td>
                <td>{row.numOfDonation}</td>
                <td>
                  {movementContent && (
                    <>
                      {movementContent} {steps} steps
                    </>
                  )}
                </td>
              </tr>
            );
          }

          return (
            <tr key={row.position}>
              <td>{row.position}</td>
              <td>{row.hallName}</td>
              <td>{row.amountDonated}</td>
              <td>{row.numOfDonation}</td>
              <td></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DonationTable;


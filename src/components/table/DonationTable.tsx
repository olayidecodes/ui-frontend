import "./style.css"

import React from 'react'

const DonationTable = () => {
    const data = [
        { id: 1, hallName: 'Kenneth Mellanby Hall', amountDonated: "#152,342,345.06", numOfDonation: 305, position: 1 },
        { id: 2, hallName: 'Queen Elizabeth II Hall', amountDonated: "#152,342,345.06", numOfDonation: 295, position: 2 },
        { id: 3, hallName: 'Queen Idia Hall', amountDonated: "#152,342,345.06", numOfDonation: 285, position: 3 },
        { id: 4, hallName: 'Sultan Bello Hall', amountDonated: "#152,342,345.06", numOfDonation: 275, position: 4 },
        { id: 5, hallName: 'Nnamdi Azikwe Hall', amountDonated: "#152,342,345.06", numOfDonation: 245, position: 5 },
        { id: 6, hallName: 'Independence Hall', amountDonated: "#152,342,345.06", numOfDonation: 205, position: 6 },
        { id: 7, hallName: 'Ransome Kuti Hall', amountDonated: "#152,342,345.06", numOfDonation: 195, position: 7 },
        { id: 8, hallName: 'Obafemi Awolowo Hall', amountDonated: "#152,342,345.06", numOfDonation: 175, position: 8 },
        { id: 9, hallName: 'Lord Tedder Hall', amountDonated: "#152,342,345.06", numOfDonation: 155, position: 9 },
        { id: 10, hallName: 'ABH', amountDonated: "#152,342,345.06", numOfDonation: 154, position: 10 },
        { id: 11, hallName: 'Nnamdi Azikwe Hall', amountDonated: "#152,342,345.06", numOfDonation: 145, position: 11 }
      ];

      return (
        <table className="custom-table">
          <thead>
            <tr>
              {/* <th>S/N</th> */}
              <th>Hall Of Residence</th>
              <th>Amount Donated</th>
              <th>Number Of Donations</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                {/* <td>{row.id}</td> */}
                <td>{row.hallName}</td>
                <td>{row.amountDonated}</td>
                <td>{row.numOfDonation}</td>
                <td>{row.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
}

export default DonationTable
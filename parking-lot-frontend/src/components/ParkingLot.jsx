import React from 'react';

const ParkingLot = ({ parkingLot }) => {
  const { capacity, name, tickets } = parkingLot;

  const grid = Array.from({ length: capacity }, (_, index) => {
    const car = tickets.find(ticket => ticket.position === index + 1);
    return car ? car.plateNumber : '';
  });

  return (
    <div style={{ margin: '20px' }}>
      <h1>parking lot</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
        {grid.map((plateNumber, index) => (
          <div key={index} style={{ border: '1px solid black', padding: '20px', textAlign: 'center' }}>
            {plateNumber}
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <strong>{name}</strong>
      </div>
    </div>
  );
};

export default ParkingLot;
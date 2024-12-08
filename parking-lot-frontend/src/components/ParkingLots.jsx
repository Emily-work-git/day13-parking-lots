import React from 'react';
import ParkingLot from './ParkingLot';

const ParkingLots = ({ parkingLots }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      {parkingLots.map((lot, index) => (
        <ParkingLot key={index} parkingLot={lot} />
      ))}
    </div>
  );
};

export default ParkingLots;
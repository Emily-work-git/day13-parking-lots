import React from 'react';
import ParkingComponent from './ParkingComponent';
import ParkingLot from './ParkingLot';
import { useEffect } from 'react';
import { fetchParkingLot } from '../api/parkingLot';
import { getAllParkingLots } from '../reducer/reducer';
import { useParking } from '../reducer/reducer';
import ParkingLots from './ParkingLots';


export default function Parking() {
  const {state, dispatch} = useParking()
    const fetchData = async () => {
        try {
          fetchParkingLot()
          .then((data) => {
            console.log(data)
            dispatch(getAllParkingLots(data));
          }
        );
        } catch (error) {
          console.error('Error fetching parking lots:', error);
        }
      };
      useEffect(() => {
        fetchData();
      }, []);

    return (
        <div>
            <ParkingComponent />
            <ParkingLots parkingLots={state} />
        </div>
    )
}
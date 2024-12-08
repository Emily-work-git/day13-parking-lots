import React, { useState, useEffect } from 'react';
import { Input, Select, Button, message, Typography } from 'antd';
import axios from 'axios';
import { fetchCar, fetchParkingStrategy } from '../api/parkingLot';
import { parkCar } from '../api/parkingLot';

const { Option } = Select;

export default function ParkingComponent() {
    const [plateNumber, setPlateNumber] = useState('');
    const [parkingStrategy, setParkingStrategy] = useState('Standard');
    const [parkingStrategyData, setParkingStrategyData] = useState([]);

    useEffect(() => {
        fetchParkingStrategy()
        .then((data) => setParkingStrategyData(data))
        .catch((error) => {message.error('Failed to fetch parking strategy data.');});
    }, []);

    const handlePark = () => { 
        console.log(plateNumber, parkingStrategy);
        parkCar(parkingStrategy, plateNumber)
        .then((data) => {
            message.success('Car parked successfully');
            console.log(data);
        });
    }

    const handleFetch = () => {
        console.log(plateNumber);
        fetchCar(plateNumber)
        .then((data) => {
            message.success('Car fetched successfully');
            console.log(data);
        });
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: "1vw"}}>
            <Typography>Plate Number</Typography>
            <Input
                placeholder="Enter plate number"
                value={plateNumber}
                onChange={(e) => setPlateNumber(e.target.value)}
                style={{ width: "200px", marginBottom: 16, marginRight: 16 }}
            />
            <Select
                defaultValue="Standard"
                value={parkingStrategy}
                onChange={(value) => setParkingStrategy(value)}
                style={{ width: 200, marginBottom: 16, marginRight: 16 }}
            >
                {parkingStrategyData.map((strategy) => (
                    <Option key={strategy} value={strategy}>
                        {strategy}
                    </Option>
                ))}
            </Select>
            <Button type="primary" onClick={handlePark}>
                Park
            </Button>
            <Button type="primary" onClick={handleFetch}>
                Fetch
            </Button>
        </div>
    );
}
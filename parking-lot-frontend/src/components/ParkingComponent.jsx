import { Button, Input, message, Select, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { fetchCar, fetchParkingStrategy, parkCar } from "../api/parkingLot";
import { fetch, park, useParking } from "../reducer/reducer";

const { Option } = Select;
const validatePlateNumberMessage =
  "Invalid plate number format. It should be two letters + four digits (e.g., “AB-1234”).";

export default function ParkingComponent() {
  const { state, dispatch } = useParking();
  const [plateNumber, setPlateNumber] = useState("");
  const [parkingStrategy, setParkingStrategy] = useState("Standard");
  const [parkingStrategyData, setParkingStrategyData] = useState([]);

  useEffect(() => {
    fetchParkingStrategy()
      .then((data) => setParkingStrategyData(data))
      .catch((error) => {
        message.error("Failed to fetch parking strategy data.");
      });
  }, []);

  const validatePlateNumber = (plateNumber) => {
    const regex = /^[A-Z]{2}-\d{4}$/;
    return regex.test(plateNumber);
  };

  const checkCarExists = (plateNumber) => {
    return state.some((lot) =>
      lot.tickets.some((ticket) => {
        console.log("ticket:", ticket.plateNumber)
        console.log("plateNumber:", plateNumber)
        return ticket.plateNumber === plateNumber;
      }
    ));
  };

  const handlePark = () => {
    if (!validatePlateNumber(plateNumber)) {
      message.error(validatePlateNumberMessage);
      return;
    }

    if (checkCarExists(plateNumber)) {
      message.error("Car with this plate number is already parked.");
      return;
    }

    parkCar(parkingStrategy, plateNumber).then((data) => {
      message.success("Car parked successfully");
      console.log(data);
      dispatch(park(data));
    });
  };

  const handleFetch = () => {
    if (!validatePlateNumber(plateNumber)) {
      message.error(validatePlateNumberMessage);
      return;
    }

    if (!checkCarExists(plateNumber)) {
      message.error("Car with this plate number is not found.");
      return;
    }

    fetchCar(plateNumber).then((data) => {
      message.success("Car fetched successfully");
      dispatch(fetch(data.plateNumber));
    });
  };

  useEffect(() => console.log("state:", state), [state]);

  
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "1vw",
        }}
      >
        <Typography>Plate Number</Typography>
        <Input
          placeholder="Enter plate number"
          value={plateNumber}
          onChange={(e) => {
            setPlateNumber(e.target.value);
          }}
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
    </>
  );
}

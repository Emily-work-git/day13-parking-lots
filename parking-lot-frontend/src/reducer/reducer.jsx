import React, { createContext, useReducer, useContext } from "react";

// Initial state
const initialState = [];

// Actions
const GET_ALL_PARKING_LOTS = "GET_ALL_PARKING_LOTS";
const PARK = "PARK";
const FETCH = "FETCH";

// Reducer function
const parkingReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_PARKING_LOTS:
      return action.payload;
    case PARK:
      return state.map((lot) => {
        if (lot.id === action.payload.parkingLot) {
          return {
            ...lot,
            tickets: [...lot.tickets, action.payload],
            availableCapacity: lot.availableCapacity - 1,
            availablePositionRate: (lot.availableCapacity - 1) / lot.capacity,
            full: lot.availableCapacity - 1 === 0,
          };
        }
        return lot;
      });
    case FETCH:
      return state.map((lot) => {
        if (
          lot.tickets.some(
            (ticket) => ticket.plateNumber == action.payload.plateNumber
          )
        ) {
          return {
            ...lot,
            tickets: lot.tickets.filter(
              (ticket) => ticket.plateNumber !== action.payload.plateNumber
            ),
            availableCapacity: lot.availableCapacity + 1,
            availablePositionRate: (lot.availableCapacity + 1) / lot.capacity,
            full: false,
          };
        }
        return lot;
      });
    default:
      return state;
  }
};

// Create context
const ParkingContext = createContext();

// Context provider component
export const ParkingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(parkingReducer, initialState);

  return (
    <ParkingContext.Provider value={{ state, dispatch }}>
      {children}
    </ParkingContext.Provider>
  );
};

// Custom hook to use the ParkingContext
export const useParking = () => {
  return useContext(ParkingContext);
};

// Action creators
export const getAllParkingLots = (parkingLots) => ({
  type: GET_ALL_PARKING_LOTS,
  payload: parkingLots,
});

export const park = (ticket) => ({
  type: PARK,
  payload: ticket,
});

export const fetch = (plateNumber, parkingLot) => ({
  type: FETCH,
  payload: { plateNumber },
});

import axios from 'axios';

const baseURL = 'http://localhost:8080';

export const fetchParkingStrategy = async () => {
    try {
        const response = await axios.get(`${baseURL}/parking-strategies`);
        return response.data;
    } catch (error) {
        console.error('Error fetching parking strategy data:', error);
        throw error;
    }
};

// Function to fetch parking lot data
export const fetchParkingLot = async () => {
    try {
        const response = await axios.get(`${baseURL}/parking-lots`);
        return response.data;
    } catch (error) {
        console.error('Error fetching parking lot data:', error);
        throw error;
    }
};

// Function to park a car
export const parkCar = async (strategy, plateNumber) => {
    try {
        console.log('plateNumber:', plateNumber);
        console.log('strategy:', strategy);
        const response = await axios.post(`${baseURL}/parking-strategies/${strategy}`, {"plateNumber":plateNumber});
        return response.data;
    } catch (error) {
        console.error('Error parking car:', error);
        throw error;
    }
};

// Function to fetch a car
export const fetchCar = async (plateNumber) => {
    try {
        console.log('plateNumber:', plateNumber);
        const response = await axios.post(`${baseURL}/parking-lots/cars/${plateNumber}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching car:', error);
        throw error;
    }
};

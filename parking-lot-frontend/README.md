#### Prompt 
1.  I am developing the frontend for a parking lot management system. Here is the context:

    As a Parking Manager, I oversee three parking lots:

    The Plaza Park (9 parking spaces)
    City Mall Garage (12 parking spaces)
    Office Tower Parking (9 parking spaces)
    I have three Parking Boys, each using a different parking strategy:

    Standard parking strategy
    Smart parking strategy
    Super Smart parking strategy
    To enhance management and streamline operations, I need an application that helps me visualize and efficiently manage the parking and retrieval process, while also tracking the current usage of each parking lot.

    The first component I need is the Parking component, which should include:

    An input box for entering the plate number, with a label
    A dropdown list for selecting the Parking Boy, with options: “STANDARD”, “SMART”, “SUPERSMART”, fetched from the fetchParkingStrategy() api
    Two buttons: one for parking the car and one for fetching the car
    These three elements should be aligned in a single row and centered within the component.
    Use AntDesign component to style the elements.

2. Use axios to implement the fetchParkingStrategy() api, the base URL is http://localhost:8080

3. I would like to use useContext and useReducer to manage the parking lots' information. This is the mocked data list: [ { "id": 1, "name": "The Plaza Park", "tickets": [ { "plateNumber": "123", "position": 1, "parkingLot": 1 } ], "capacity": 9, "availableCapacity": 8, "availablePositionRate": 0.8888888888888888, "full": false }, { "id": 2, "name": "City Mall Garage", "tickets": [ { "plateNumber": "234", "position": 1, "parkingLot": 2 } ], "capacity": 12, "availableCapacity": 11, "availablePositionRate": 0.9166666666666666, "full": false }, { "id": 3, "name": "Office Tower Parking", "tickets": [], "capacity": 9, "availableCapacity": 9, "availablePositionRate": 1.0, "full": false } ] I want to have 3 actions: get allParkingLots: get a list in the above format and save it. park: park a car into the parking Lot and modify the above list base on the response. the expected response: { "plateNumber": "AB-5678", "position": 2, "parkingLot": 1 } fetch: fetch a card from the parking lot and modify the above list base on the response. the expected response: { "plateNumber": "AB-5678" }

4. now, in the ParkingLot component, display the parking lot in a gridmap with maximum 3 grids in a row, for example, for a parking lot with 12 capacity, it have 3 columns and 4 rows. for each grid, if there is a car parked on it, display the plate number. otherwise, leave it empty. below the grid, display the name of the parking lot.

Also, in the ParkingLots component, parking lots should be displayed in a row

5. now, I want to have a checking on the plate number, the format should be two letters + four digits (e.g., “AB-1234”). also, parking a car that already exist in parking lots is not allowed. also, fetching a car that not exist in parking lots is not allowed too. use alert to remind user about these.

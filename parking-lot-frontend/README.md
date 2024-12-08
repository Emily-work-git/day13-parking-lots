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

3. 


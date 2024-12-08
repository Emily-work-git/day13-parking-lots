import logo from './logo.svg';
import './App.css';
import Parking from './components/Parking';
import { ParkingProvider } from './reducer/reducer';

function App() {
  return (
    <div className="App" style={{ margin: '20px' }}>
      <ParkingProvider>
        <Parking/>
      </ParkingProvider>
    </div>
    
  );
}



export default App;

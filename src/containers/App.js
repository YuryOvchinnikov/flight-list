import React from 'react';
import FlightListContainer  from './FlightListContainer';
import CarrierFilterContainer  from './CarrierFilterContainer';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => (
    <div>
        <CarrierFilterContainer />
        <FlightListContainer />
    </div>
)

export default App

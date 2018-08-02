import React from 'react';
import Flight from '../Flight';
import './style.css';

const FlightList = ({ flights }) => (
    <div className="flightList">
        {flights.map(flight =>
            <Flight
                key={flight.id}
                flight={flight}
            />
        )}
    </div>
)

export default FlightList;

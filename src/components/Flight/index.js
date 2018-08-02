import React from 'react';
import './style.css';
import moment from 'moment/moment';

const Flight = ({ flight }) => (
    <div className="flight card">
        <div className="flight-header card-header">{flight.carrier}</div>
        <div className="flight-content card-body">
            <div>
                <div className="flight-contentTime">{ moment(flight.departure).format('H:mm')}</div>
                <div className="flight-contentDirection">{flight.direction.from}</div>
                <div className="flight-contentDate">{ moment(flight.departure).format('DD.MM.YYYY')}</div>
            </div>
            <div>
                <div className="flight-contentTime">{ moment(flight.arrival).format('H:mm')}</div>
                <div className="flight-contentDirection">{flight.direction.to}</div>
                <div className="flight-contentDate">{ moment(flight.arrival).format('DD.MM.YYYY')}</div>
            </div>
        </div>
    </div>
)

export default Flight;

import React from 'react';
import './style.css';

const CarrierFilter = ({ carriers, onChange }) => (
    <select className="carrierFilter form-control" onChange={(event) => { onChange(event.target.value)}}>
        {carriers.map(carrier =>
            <option key={carrier}>{carrier}</option>
        )}
    </select>
)

export default CarrierFilter;

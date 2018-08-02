import * as types from '../constants/ActionTypes'
import _ from 'underscore';

const flights = (state = {}, action) => {
    switch (action.type) {
        case types.RECEIVE_FLIGHTS:
            return {
                all: action.flights,
                visible: action.flights,
                carriers: getUniqueCarriers(action.flights)
            }
        case types.CARRIER_FILTER_SELECTED:
            const new_flights = state.all.filter(flight => {
                return flight.carrier === action.filter || action.filter === state.carriers[0]
            });

            return {
                all: state.all,
                visible: new_flights,
                carriers: state.carriers
            }
        default:
            return state
    }
}

const getUniqueCarriers = (flights) => {
    let carriers_list = ['все авиакомпании'];
    _.forEach(flights, (flight) => {
        carriers_list.push(flight.carrier);
    });

    return _.uniq(carriers_list);
}

export const getFlights = state => {
    return state.flights.visible
}

export default flights

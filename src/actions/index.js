import * as types from '../constants/ActionTypes'
import api from '../api';

const receiveFlights = flights => ({
    type: types.RECEIVE_FLIGHTS,
    flights: flights
})

export const getAllFlights = () => dispatch => {
    api.getFlights(flights => {
        dispatch(receiveFlights(flights))
    })
}

export const filterCarriers = filter => ({
    type: types.CARRIER_FILTER_SELECTED,
    filter
})

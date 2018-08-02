import { connect } from 'react-redux'
import FlightList from '../components/FlightList'
import { getFlights } from '../reducers/flights'

const mapStateToProps = state => ({
    flights: getFlights(state)
})

export default connect(
  mapStateToProps,
)(FlightList)

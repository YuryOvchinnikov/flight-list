import { connect } from 'react-redux'
import CarrierFilter from '../components/CarrierFilter'
import { filterCarriers } from '../actions'

const mapStateToProps = state => ({
    carriers: state.flights.carriers
})

const mapDispatchToProps = dispatch => ({
    onChange: filter => dispatch(filterCarriers(filter))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CarrierFilter)

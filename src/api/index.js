import _data from './data.json'

export default {
  getFlights: (cb) => cb(_data.flights)
}

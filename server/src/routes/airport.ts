import express from 'express'
import { filterByDepature, filterByDepartureAndArrival } from '@src/parser/AirportParser'
const departure = express.Router()

// middleware that is specific to this router
departure.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

departure.get('/:airport', async (req, res) => {
  const airport = req.params.airport
  const data = await filterByDepature(airport)
  res.send(data)
})

departure.get('/:departure/:arrival', async (req, res) => {
  const { departure, arrival } = req.params
  const data = await filterByDepartureAndArrival(departure, arrival)
  res.send(data)
})

export default departure
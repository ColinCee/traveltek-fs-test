import express from 'express'
import { filterByDepartureAirport } from '@src/parser/AirportParser'
const airport = express.Router()

// middleware that is specific to this router
airport.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

airport.get('/:airport', async (req, res) => {
  const airport = req.params.airport
  const data = await filterByDepartureAirport(airport)
  res.send(data)
})

airport.get('/:airportOne/:airportTwo', async (req, res) => {
  res.send(`Received ${req.params}`)
})

export default airport
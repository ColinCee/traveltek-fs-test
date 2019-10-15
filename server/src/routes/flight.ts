import express from 'express'
import { filterByFlightClass } from '@src/filters/flight'
import { count } from '@src/parser/csv'
const flight = express.Router()

flight.get('/byClass/:classNum', async (req, res) => {
  const { classNum } = req.params
  const data = await filterByFlightClass(classNum)
  res.send(data)
})

flight.get('/total', async (req, res) => {
  const data = await count(json => true)
  res.send(data)
})

export default flight
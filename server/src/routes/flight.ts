import express from 'express'
const flight = express.Router()

flight.get('/class/:class', async (req, res) => {
  const { departure, arrival } = req.params
  res.send(data)
})

export default flight
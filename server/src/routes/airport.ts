import express from 'express'
const airport = express.Router()

// middleware that is specific to this router
airport.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

// define the home page route
airport.get('/:airport', function (req, res) {
  res.send(`Received ${req.params.airport}`)
})
// define the about route
airport.get('/:airportOne/:airportTwo', function (req, res) {
  res.send(`Received ${req.params}`)
})

export default airport
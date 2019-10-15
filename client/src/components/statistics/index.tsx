import React from 'react'
import { Container } from 'semantic-ui-react'
import { Heading } from './Heading'
import { Departure } from './Departure'
import { JourneyTime } from './JourneyTime'
import { FlightClass } from './FlightClass'
import { SwedishFlights } from './SwedishFlights'

export const Statistics: React.FC = () => {
  return (
    <Container>
      <Heading />
      <JourneyTime />
      <Departure />
      <FlightClass />
      <SwedishFlights />
    </Container>
  )
}

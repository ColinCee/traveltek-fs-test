import React from "react"
import { Container, Image, Header } from "semantic-ui-react"
import styled from "styled-components"
import { Heading } from "./Heading"
import { Departure } from "./Departure"
import { JourneyTime } from "./JourneyTime"

export const Statistics: React.FC = () => {
  return (
    <div>
      <Container>
        <Heading />
        <JourneyTime />
        <Departure />
      </Container>
    </div>
  )
}

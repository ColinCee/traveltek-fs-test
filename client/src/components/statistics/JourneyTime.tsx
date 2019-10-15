import React, { useState, useEffect } from 'react'
import api from '../../api'
import { calculateAverageJourneyTime } from './dataProcessor/journeyTime'
import { Header, Icon } from 'semantic-ui-react'
import styled from 'styled-components'

export const JourneyTime = () => {
  const [journeys, setJourneys] = useState([])

  const fetchData = async () => {
    const { data } = await api.journey('LHR', 'DXB')
    await setJourneys(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const Component = styled.div`
    margin-bottom: 2em;
  `
  const heading = ({ className, children }: any) => {
    return (
      <h2 className={className}>
        Average journey time - LHR
        <Icon name='arrow right' size='small' />
        BXH
      </h2>
    )
  }

  const StyledHeading = styled(heading)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `
  return (
    <Component>
      <StyledHeading />
      <Icon name='clock outline' />
      {calculateAverageJourneyTime(journeys)}
    </Component>
  )
}

import React, { useState, useEffect } from 'react'
import api from '../../api'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'

export const SwedishFlights = () => {
  const [percentage, setPercentage] = useState()
  const fetchData = async () => {
    const { data } = await api.destination('ARN')
    const flightCount = Object.keys(data).length
    const totalCount = await api.totalCount()

    let percentage: number = (flightCount / totalCount.data.count) * 100
    // Round to two decimal places
    percentage = Math.round(percentage * 100) / 100
    await setPercentage(percentage)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const Component = styled.div`
    margin-bottom: 2em;
  `
  return (
    <Component>
      <h2>Percentage of total flights to Sweden</h2>
      <h3>
        {percentage}
        <Icon name='percent' size='small' />
      </h3>
    </Component>
  )
}

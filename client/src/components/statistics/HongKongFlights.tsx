import React, { useState, useEffect } from 'react'
import api from '../../api'
import { Flag } from 'semantic-ui-react'

export const HongKongFlights = () => {
  const [flightCount, setFlightCount] = useState(0)

  const fetchData = async () => {
    const { data } = await api.destination('HKG')
    const count = Object.keys(data).length
    await setFlightCount(count)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <h2>Flights to HKG</h2>
      {flightCount} <Flag name='hk' />
    </div>
  )
}

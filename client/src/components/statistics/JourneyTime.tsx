import React, { useState, useEffect } from 'react'
import api from '../../api'
export const JourneyTime = () => {
  const [journeys, setJourneys] = useState([])

  const fetchData = async () => {
    const { data } = await api.journey('LHR', 'DXB')
    await setJourneys(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log(journeys)
  return <div></div>
}

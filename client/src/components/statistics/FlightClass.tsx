import React, { useState, useEffect } from 'react'
import api from '../../api'

export const FlightClass = () => {
  const [percentage, setPercentage] = useState(0)

  const fetchData = async () => {
    let { data } = await api.byClass(3)
    const businessClassCount = Object.keys(data).length
    const totalCount = await api.totalCount()

    let percentage: number = (businessClassCount / totalCount.data.count) * 100
    // Round to two decimal places
    percentage = Math.round(percentage * 100) / 100
    await setPercentage(percentage)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <h2>Percentage of flights that are business class</h2>
      {percentage} %
    </div>
  )
}

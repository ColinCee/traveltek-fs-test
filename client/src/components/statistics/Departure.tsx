import React, { useEffect, useState } from "react"
import api from "../../api"
import { object } from "prop-types"
import { Icon, Header } from "semantic-ui-react"

export const Departure = () => {
  const [departData, setDepartData]: [any[], any] = useState([])

  const countFlights = () => {
    const count: any = {}

    departData.forEach((value, index, array) => {
      const arrivalDate = value.inarrivaldate
      if (!count.hasOwnProperty(arrivalDate)) {
        count[arrivalDate] = 1
        return
      }
      count[arrivalDate] += 1
    })
    return count
  }

  const getDateWithMaxFlights = () => {
    let maxDate = ""
    let maxCount = 0

    const flightCount = countFlights()
    Object.keys(flightCount).forEach(key => {
      const flightsOnThisDate = flightCount[key]
      if (flightsOnThisDate > maxCount) {
        maxDate = key
        maxCount = flightsOnThisDate
      }
    })
    return { maxDate, maxCount }
  }

  const fetchData = async () => {
    const { data } = await api.departure("MAN")
    await setDepartData(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const { maxCount, maxDate } = getDateWithMaxFlights()
  return (
    <div>
      <Header as='h2'>Day with most departures from MAN</Header>
      <Icon name='plane' />
      {maxCount} flights on {maxDate}
    </div>
  )
}

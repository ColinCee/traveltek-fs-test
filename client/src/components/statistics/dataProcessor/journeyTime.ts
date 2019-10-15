import moment from "moment"
import IJourney from '../../../types/IJourney'

// Calculated in minutes
let totalJourneyTime = moment.duration(0);
let journeyCount = 0;

const processOutLeg = (journey: IJourney) => {
  const { outdepartdate, outdeparttime } = journey
  const outDepart = moment(
    `${outdepartdate} ${outdeparttime}`,
    'YYYY-MM-DD HH:mm:ss'
  )

  const { outarrivaldate, outarrivaltime } = journey
  const outArrival = moment(
    `${outarrivaldate} ${outarrivaltime}`,
    'YYYY-MM-DD HH:mm:ss'
  )

  const diff = outArrival.diff(outDepart)
  const duration = moment.duration(diff)
  totalJourneyTime.add(duration)
  console.log(totalJourneyTime)
  journeyCount++;
}

const processInLeg = (journey: IJourney) => {
  const { indepartdate, indeparttime } = journey
  const { inarrivaldate, inarrivaltime } = journey
  if (!indepartdate || !indeparttime) {
    return
  }

  const inDepart = moment(
    `${indepartdate} ${indeparttime}`,
    'YYYY-MM-DD HH:mm:ss'
  )
  const inArrival = moment(
    `${inarrivaldate} ${inarrivaltime}`,
    'YYYY-MM-DD HH:mm:ss'
  )

  const diff = inArrival.diff(inDepart)
  const duration = moment.duration(diff)
  totalJourneyTime.add(duration)
  journeyCount++;
}

export const calculateAverageJourneyTime = (journeys: IJourney[]) => {
  journeys.forEach(journey => {
    processOutLeg(journey)
    processInLeg(journey)
  })


  const averageJourneyTimeSeconds = totalJourneyTime.asSeconds() / journeyCount
  const minutes = Math.round(averageJourneyTimeSeconds % 60)
  const hours = Math.floor(averageJourneyTimeSeconds / 3600)
  return `${hours}h ${minutes}m`
}
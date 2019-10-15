import { filter } from "@src/parser/csv";


const flightClasses: { [index: number]: string } = {
  1: 'ECONOMY',
  2: 'PREMIUM ECONOMY',
  3: 'BUSINESS'
}

export async function filterByFlightClass(classNum: any) {
  const className = flightClasses[classNum]

  return filter(({ outflightclass, inflightclass }) => {
    if (outflightclass.toUpperCase() === className) {
      return true
    }

    if (inflightclass.toUpperCase() === className) {
      return true
    }

    return false
  })
}


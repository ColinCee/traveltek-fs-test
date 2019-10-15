import { filter } from "@src/parser/csv";


const flightClasses: { [index: number]: string } = {
  1: 'ECONOMY',
  2: 'PREMIUM ECONOMY',
  3: 'BUSINESS'
}

export async function filterByFlightClass(classNum: number) {
  const className = flightClasses[classNum]

  return filter(json => json.outflightclass === className || json.inflightclass === className)
}
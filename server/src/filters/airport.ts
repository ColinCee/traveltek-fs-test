import { filter } from "@src/parser/csv"


export async function filterByDepature(airport: string) {
  return filter(json => json.depair === airport)
}

export async function filterByArrival(airport: string) {
  return filter(json => json.destair === airport)
}

export async function filterByDepartureAndArrival(departure: string, arrival: string) {
  return filter(({ depair, destair }) => (depair === departure && destair === arrival))
}
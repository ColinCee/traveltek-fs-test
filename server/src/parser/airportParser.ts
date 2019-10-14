import csv from 'csvtojson'

const csvPath = 'static/flight_data.csv'

const filter = async (filterFunction: (json: any) => boolean) => {
  const output: object[] = []
  await csv().fromFile(csvPath).subscribe(async (json) => {
    if (filterFunction(json)) {
      output.push(json)
    }
  })

  return output
}

export async function filterByDepature(airport: string) {
  return filter(json => json.depair === airport)
}

export async function filterByDepartureAndArrival(departure: string, arrival: string) {
  return filter(({ depair, destair }) => (depair === departure && destair === arrival))
}
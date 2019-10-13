import csv from 'csvtojson'

const csvPath = 'static/flight_data.csv'

export async function parseDepartureAirport(airport: string) {
  const output: object[] = []
  await csv().fromFile(csvPath).subscribe(async (json) => {
    if (json.depair === airport) {
      output.push(json)
    }
  })

  return output
}
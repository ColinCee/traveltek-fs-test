import csv from 'csvtojson'
import IJourney from '@src/types/IJourney'

const csvPath = 'static/flight_data.csv'

export const filter = async (filterFunction: (json: IJourney) => boolean) => {
  const output: object[] = []

  await csv().fromFile(csvPath).subscribe(async (json) => {
    if (filterFunction(json)) {
      output.push(json)
    }
  })

  return output
}

export const count = async (countFunction: (json: IJourney) => boolean) => {
  let count = 0

  await csv().fromFile(csvPath).subscribe(async (json) => {
    if (countFunction(json)) {
      count += 1
    }
  })

  return { count }
}
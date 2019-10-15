import axios from 'axios'

const baseAxios = axios.create({
  // Note that there is no trailing slash at the end
  baseURL: 'http://localhost:8080',
})

const airports = {
  destination: (airport: string) => baseAxios.get(`/airport/destination/${airport}`),
  departure: (airport: string) => baseAxios.get(`/airport/depart/${airport}`),
  journey: (departure: string, arrival: string) => baseAxios.get(`/airport/${departure}/${arrival}`),
}

const flightApi = {
  byClass: (type: ClassType) => baseAxios.get('/flight/byClass/' + type),
  totalCount: () => baseAxios.get('/flight/total')
}

export enum ClassType {
  BUSINESS = 3
}
export default {
  ...airports,
  ...flightApi
}
import axios from 'axios'

const baseAxios = axios.create({
  // Note that there is no trailing slash at the end
  baseURL: 'http://localhost:8080',
})

const departureApi = {
  departure: (airport: string) => baseAxios.get(`/departure/${airport}`),
  journey: (departure: string, arrival: string) => baseAxios.get(`/departure/${departure}/${arrival}`),
}

const flightApi = {
  byClass: (classNum: number) => baseAxios.get('/flight/byClass/' + classNum),
  totalCount: () => baseAxios.get('/flight/total')
}

export default {
  ...departureApi,
  ...flightApi
}
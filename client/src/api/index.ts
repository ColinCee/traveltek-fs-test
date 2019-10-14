import axios from 'axios'

const baseAxios = axios.create({
  // Note that there is no trailing slash at the end
  baseURL: 'http://localhost:8080/departure',
})

export default {
  departure: (airport: string) => baseAxios.get(`/${airport}`),
  leg: (departure: string, arrival: string) => baseAxios.get(`/${departure}/${arrival}`)
}
import axios from 'axios'

export const ipApi = axios.create({
  baseURL: `https://api.ipify.org/?format=json`,
})

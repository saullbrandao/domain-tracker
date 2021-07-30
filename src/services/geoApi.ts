import axios from 'axios'

export const geoApi = axios.create({
  baseURL: `https://geo.ipify.org/api/v1`,
})

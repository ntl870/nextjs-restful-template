import axios from 'axios'

const token = ''

const headers = {
  'Access-Control-Allow-Origin': '*',
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`
}

export const clientAPI = axios.create({
  baseURL: process.env.API_ENDPOINT,
  headers: headers
})

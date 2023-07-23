import axios from 'axios'
import { getToken } from './globalMethods/tokenMethods'

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

const $axios = axios.create({
  baseURL: API_BASE_URL
})

$axios.interceptors.request.use(
  config => {
    const accessToken = getToken()

    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`
    }
    return config
  },
  error => {
    console.error('Interceptor Error:', error)

    return Promise.reject(error)
  }
)

export default $axios

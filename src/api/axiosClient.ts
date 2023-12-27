import axios, { InternalAxiosRequestConfig } from 'axios'
import { tokenDecode } from '../utils/token'
import { jwtDecode } from 'jwt-decode'
import { userApi } from './userApi'

const access_token = localStorage.getItem('access_token')
const axiosClient = axios.create({
  baseURL: 'http://localhost:8888',
  headers: {
    'content-type': 'application/json'
  }
})
export const refreshToken = async (refresh_token: string) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response: any = await userApi.refreshTokenApi(refresh_token)
    console.log('response ref', response)
    // Lưu trữ token mới và refresh token mới vào localStorage
    localStorage.setItem('access_token', response.access_token)
    localStorage.setItem('refresh_token', response.refresh_token)

    return response.access_token
  } catch (error) {
    console.error('Error refreshing token:', error)
    throw error
  }
}
// Add a request interceptor
axiosClient.interceptors.request.use(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function (config: InternalAxiosRequestConfig<any>) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const access_token = localStorage.getItem('access_token') === null ? 'null' : localStorage.getItem('access_token')

    if (access_token && access_token !== 'undefined' && access_token !== 'null') {
      config.headers.Authorization = `Bearer ${access_token}`
    }

    return config
  },
  async function (error) {
    console.log(1)
    // console.log("hihi", error);

    return Promise.reject(error)
  }
)

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data
  },
  async function (error) {
    const originalRequest = error.config
    if ((error.response.status === 401 || error.response.status === 422) && !originalRequest._retry) {
      originalRequest._retry = true
      const refreshTokenOld = localStorage.getItem('refresh_token') || 'null'
      const accessTokenOld = localStorage.getItem('access_token') || 'null'

      const decodedToken = jwtDecode(accessTokenOld) as tokenDecode
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        try {
          const access_token = await refreshToken(refreshTokenOld)
          // Retry the original request with the new token
          originalRequest.headers.Authorization = `Bearer ${access_token}`
          return axiosClient(originalRequest)
        } catch (error) {
          // Handle refresh token error or redirect to login
          console.log('error catch', error)
        }
      }
    }
    return Promise.reject(error)
  }
)
axiosClient.defaults.headers.common['Authorization'] = `Bearer ${access_token}`
export default axiosClient

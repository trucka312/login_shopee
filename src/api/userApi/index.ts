import { AxiosResponse } from 'axios'
import axiosClient from '../axiosClient'

export const userApi = {
  async refreshTokenApi(refreshToken: string): Promise<AxiosResponse> {
    const url = '/users/refresh-token'
    return axiosClient.post(url, { refresh_token: refreshToken })
  }
}

import axios, { AxiosRequestConfig } from "axios"

const instance = axios.create({
  baseURL: `https://api.currentsapi.services/v1`,
})
export async function request<T>(config: AxiosRequestConfig): Promise<T> {
  return instance(config).then((response) => response.data)
}

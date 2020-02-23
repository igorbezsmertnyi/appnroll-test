import axios, { AxiosInstance } from "axios"

const instance: AxiosInstance = axios.create({
  baseURL: "https://api.github.com/graphql",
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  },
})

export default instance

import axios from "axios";
export default function Request(config) {
  const axiosexample = axios.create({
    baseURL: 'https://v.api.aa1.cn/api'
  })
  return axiosexample(config)
}
import axios from 'axios'

const ERR_OK = 0
// eslint-disable-next-line no-undef
const baseURL = process.env.NODE_ENV === 'production' ? 'http://ustbhuangyi.com/music-next/' : '/'
// const baseURL = 'http://ustbhuangyi.com/music-next/'

console.log('baseURL>>>', baseURL)

axios.defaults.baseURL = baseURL

export function get(url, params) {
  return axios
    .get(url, {
      params
    })
    .then((res) => {
      const serverData = res.data
      if (serverData.code === ERR_OK) {
        return serverData.result
      }
    })
    .catch((e) => {
      console.log(e)
    })
}

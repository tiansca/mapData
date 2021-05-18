const axios = require('axios')
// create an axios instance
const service = axios.create()

let oldTime = (new Date()).valueOf()
let enableFreeze = false
// request interceptor
service.interceptors.request.use(
  config => {
    const url = config.url
    // console.log(url)
    return config
  },
  error => {
    // do something with request error
    return Promise.reject(error)
  }
)
// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    return Promise.resolve(res)
  },
  error => {
    console.log('err' + error.response) // for debug
    return Promise.reject('系统异常，请刷新重试或联系管理员！')
  }
)

module.exports = service

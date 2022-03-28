import axios from 'axios'

const server1 = axios.create({
  baseURL: 'http://123.207.32.32:9001',
  timeout: 3000,
})
// 传入两个回调函数
server1.interceptors.request.use(
  (config) => {
    // 发送请求的时候出现loading的组件

    //某些情况必须要携带token,没有token就直接返回到登录页

    // params和data的实例化操作
    return config
  },
  (err) => {}
)

server1.interceptors.response.use(
  (config) => {
    // 进行解构
    return config.data
  },
  (err) => {
    switch (err.code) {
      case 404:
        console.log('一样')
        break
      case 500:
        console.log('服务器异常')
        break
      default:
        console.log('具体错误请去打印')
    }
  }
)

export default server1

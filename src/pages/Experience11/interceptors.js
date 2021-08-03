import axios from 'axios'

axios.interceptors.request.use(
  (req) => {
    req.headers.KEVIN = 1337
    console.log('Interceptor Request', req)
    return req
  },
  (err) => {
    return Promise.reject(err)
  }
)

axios.interceptors.response.use(
  (res) => {
    console.log('Interceptor Response', res)
    if (res.status === 201) {
      console.log('Posted Successfully')
    }
    return res
  },
  (err) => {
    return Promise.reject(err)
  }
)

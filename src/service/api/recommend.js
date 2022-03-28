import request from '../index'

export const getTopBanners = () => {
  return request({
    url: '/banner',
  })
}

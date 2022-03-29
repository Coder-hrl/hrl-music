import request from '../index'

export const getTopBanners = () => {
  return request({
    url: '/banner',
  })
}

export const getHotRecommends = (limit) => {
  return request({
    url: '/personalized',
    params: {
      limit,
    },
  })
}

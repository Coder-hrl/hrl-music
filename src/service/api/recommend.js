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

export const getNewAlbum = (limit) => {
  return request({
    url: '/top/album',
    params: {
      limit,
    },
  })
}

export const getTopList = (idx) => {
  return request({
    url: '/top/list',
    params: {
      idx,
    },
  })
}

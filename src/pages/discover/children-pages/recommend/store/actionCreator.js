import * as types from './contains'
import {
  getTopBanners,
  getHotRecommends,
  getNewAlbum,
  getTopList,
} from '@/service/api/recommend'
// 可能需要传入其他额外的参数

export const changeTopBannersAction = (res) => ({
  type: types.CHANGE_TOP_BANNERS,
  topBanners: res.banners,
})
export const getBannersAction = () => {
  return (dispatch) => {
    // 发送网络请求到上面的页面里面关联起来
    getTopBanners().then((res) => {
      dispatch(changeTopBannersAction(res))
    })
  }
}
// 这个是用来改变redux里面的属性的
export const changeHotRecommendsAction = (res) => ({
  type: types.CHANGE_HOT_RECOMENDATIONS,
  hotRecommends: res.result,
})
// 显示获得里面的hotrecommends 里面的东西
export const getHotRecommendsAction = (limit) => {
  return (dispatch) => {
    getHotRecommends(limit).then((res) => {
      dispatch(changeHotRecommendsAction(res))
    })
  }
}

// 获取ablum里面的内容
export const changeNewAlbum = (res) => ({
  type: types.CHANGE_NEW_ALBUM,
  newAblums: res.albums,
})

export const getNewAlbumAction = (limit) => {
  return (dispatch) => {
    getNewAlbum(limit).then((res) => {
      // console.log(res)
      dispatch(changeNewAlbum(res))
    })
  }
}

export const changeTopList = (res) => ({
  type: types.CHANGE_TOP_LIST,
  topRanking: res.playlist,
})
export const changeUpList = (res) => ({
  type: types.CHANGE_UP_LIST,
  upRanking: res.playlist,
})
export const changeOrignList = (res) => ({
  type: types.CHANGE_ORIGN_LIST,
  originRanking: res.playlist,
})

export const getTopListAction = (idx) => {
  return (dispatch) => {
    getTopList(idx).then((res) => {
      // console.log(res)
      switch (idx) {
        case 0:
          dispatch(changeTopList(res))
          break
        case 2:
          dispatch(changeUpList(res))
          break
        case 3:
          dispatch(changeOrignList(res))
          break
        default:
          dispatch(changeTopList(res))
      }
    })
  }
}

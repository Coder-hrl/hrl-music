import * as types from './contains'
import { getTopBanners, getHotRecommends } from '@/service/api/recommend'
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

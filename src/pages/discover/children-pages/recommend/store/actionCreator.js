import * as types from './contains'
import { getTopBanners } from '@/service/api/recommend'
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

import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getBannersAction } from './store/actionCreator'
const Recommend = memo(() => {
  // dispatch 操作
  // 这里面拿到数据 通过useSelector
  const { topBanners } = useSelector(
    (state) => ({
      topBanners: state.recommend.topBanners,
    }),
    shallowEqual
  )
  const dispatch = useDispatch()
  // 发送网络请求
  useEffect(() => {
    dispatch(getBannersAction())
  }, [dispatch])
  //   const { getBanners } = props

  //   useEffect(() => {
  //     getBanners()
  //   }, [getBanners])
  //   return <div>Recommend</div>
  // })
  return (
    <div>
      <h2>数组长度:{topBanners.length}</h2>
    </div>
  )

  // const mapStateToProps = (state) => ({
  //   topBanners: state.recommend.topBanners,
  // })
  // const mapDispatchToProps = (dispatch) => ({
  //   getBanners: () => dispatch(getBannersAction()),
  // })
})
// export default connect(mapStateToProps, mapDispatchToProps)(Recommend)
export default Recommend

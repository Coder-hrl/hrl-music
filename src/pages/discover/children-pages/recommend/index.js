import React, { memo } from 'react'

import TopBanner from './c-cpns/top-banner/index'
import HotRecommend from './c-cpns/hot-recommend'

import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight,
} from './style'
import Ranking from './c-cpns/ranking'
import NewAblum from './c-cpns/new-ablum'
const Recommend = memo(() => {
  // dispatch 操作
  // 这里面拿到数据 通过useSelector

  //   const { getBanners } = props

  //   useEffect(() => {
  //     getBanners()
  //   }, [getBanners])
  //   return <div>Recommend</div>
  // })
  return (
    <RecommendWrapper>
      <TopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <HotRecommend />
          <NewAblum />
          <Ranking />
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
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

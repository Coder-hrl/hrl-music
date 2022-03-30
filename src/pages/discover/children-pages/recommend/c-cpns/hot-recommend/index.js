import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import ThemeHeaderRcm from '@/components/theme-header-rcm'

import { HotRecommendWrapper } from './style'
import { getHotRecommendsAction } from '../../store/actionCreator'
import SongCover from '../../../../../../components/song-cover'
const HotRecommend = memo(() => {
  // redux hooks
  const dispatch = useDispatch()
  const { hotRecommends } = useSelector(
    (state) => ({
      hotRecommends: state.getIn(['recommend', 'hotRecommends']),
    }),
    shallowEqual
  )
  // 逻辑hooks
  useEffect(() => {
    dispatch(getHotRecommendsAction(8))
  }, [dispatch])

  // 视图层
  return (
    <HotRecommendWrapper>
      <ThemeHeaderRcm
        title="热门推荐"
        keywords={['华语', '流行', '民谣', '摇滚']}
      />
      <div className="recommend-list">
        {hotRecommends.map((item, index) => {
          return <SongCover key={item.id} info={item} />
        })}
      </div>
    </HotRecommendWrapper>
  )
})

export default HotRecommend

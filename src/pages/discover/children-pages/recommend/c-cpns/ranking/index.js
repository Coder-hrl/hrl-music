import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import ThemeHeaderRcm from '@/components/theme-header-rcm'
import { getTopListAction } from '../../store/actionCreator'
import { RankingWrapper } from './style'
import TopRanking from '../../../../../../components/top-ranking'

const Ranking = memo((props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopListAction(0))
    dispatch(getTopListAction(2))
    dispatch(getTopListAction(3))
  }, [dispatch])

  const { upRanking, newRanking, originRanking } = useSelector(
    (state) => ({
      upRanking: state.getIn(['recommend', 'upRanking']),
      newRanking: state.getIn(['recommend', 'topRanking']),
      originRanking: state.getIn(['recommend', 'originRanking']),
    }),
    shallowEqual
  )
  return (
    <RankingWrapper>
      <ThemeHeaderRcm title="榜单" />
      <div className="top">
        <TopRanking info={upRanking} />
        <TopRanking info={newRanking} />
        <TopRanking info={originRanking} />
      </div>
    </RankingWrapper>
  )
})

export default Ranking

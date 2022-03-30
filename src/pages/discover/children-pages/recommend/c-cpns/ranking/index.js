import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ThemeHeaderRcm from '@/components/theme-header-rcm'
import { getTopListAction } from '../../store/actionCreator'
import { RankingWrapper } from './style'

const Ranking = memo((props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopListAction(0))
    dispatch(getTopListAction(2))
    dispatch(getTopListAction(3))
  }, [dispatch])
  return (
    <RankingWrapper>
      <ThemeHeaderRcm title="榜单" />
      <div className="top"></div>
    </RankingWrapper>
  )
})

export default Ranking

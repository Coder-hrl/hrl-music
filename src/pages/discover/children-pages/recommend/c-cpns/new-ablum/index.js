import React, { memo, useEffect, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import ThemeHeaderRcm from '@/components/theme-header-rcm'
import AlbumCover from '@/components/album-cover'
import { getNewAlbumAction } from '../../store/actionCreator'
import { AlbumWrapper } from './style'
import { Carousel } from 'antd'

const NewAblum = memo((props) => {
  const dispatch = useDispatch()
  const { newAblums } = useSelector(
    (state) => ({
      newAblums: state.getIn(['recommend', 'newAblums']),
    }),
    shallowEqual
  )
  // 逻辑hooks
  useEffect(() => {
    dispatch(getNewAlbumAction(8))
  }, [dispatch])
  // 配置ref
  const PageRef = useRef()
  return (
    <AlbumWrapper>
      <ThemeHeaderRcm title="新碟上架" />
      <div className="content">
        <button
          className="arrow arrow-left sprite_02"
          onClick={(e) => PageRef.current.prev()}
        ></button>
        <div className="album">
          <Carousel dots={false} ref={PageRef}>
            {[0, 1].map((item) => {
              return (
                <div key={item} className="page">
                  {newAblums
                    .slice(item * 5, (item + 1) * 5)
                    .map((iten, index) => {
                      return <AlbumCover key={iten.id} info={iten}></AlbumCover>
                    })}
                </div>
              )
            })}
          </Carousel>
        </div>
        <button
          className="arrow arrow-right sprite_02"
          onClick={(e) => PageRef.current.next()}
        ></button>
      </div>
    </AlbumWrapper>
  )
})

export default NewAblum

import React, { memo, useEffect, useRef, useCallback, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getBannersAction } from '../../store/actionCreator'
import { Carousel } from 'antd'

import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style'

const TopBanner = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { topBanners } = useSelector(
    (state) => ({
      // 这里使用immutable中get的方式来取到数据
      // 使用getIn的方式来取到里面所需要的数据如 recommend和topBanners
      topBanners: state.getIn(['recommend', 'topBanners']),
    }),
    shallowEqual
  )
  const dispatch = useDispatch()
  // 发送网络请求
  useEffect(() => {
    dispatch(getBannersAction())
  }, [dispatch])
  // banner处理逻辑
  const bannerChange = useCallback((form, to) => {
    setCurrentIndex(to)
  }, [])
  const bannerRef = useRef()
  // banner莫斯效果
  const bgImage = topBanners[currentIndex] && topBanners[currentIndex].imageUrl

  // 视图层
  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            effect="fade"
            autoplay
            ref={bannerRef}
            beforeChange={bannerChange}
          >
            {topBanners.map((item, index) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              )
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button
            className="btn left"
            onClick={(e) => bannerRef.current.prev()}
          ></button>
          <button
            className="btn right"
            onClick={(e) => bannerRef.current.next()}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})

export default TopBanner

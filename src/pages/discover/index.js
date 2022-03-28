import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { DiscoverWrapper, TopMenu } from './style.js'

import request from '@/service'
import { dicoverMenu } from '@/common/local-data'
import { useEffect } from 'react'

const Discover = memo((props) => {
  const { routes } = props.route
  // useEffect 相当于componentDidMount
  useEffect(() => {
    request({ url: '/banner' }).then((res) => console.log(res))
  }, [])

  // 视图层
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {dicoverMenu.map((item, index) => {
            return (
              <div className="item" key={item.title}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            )
          })}
        </TopMenu>
      </div>
      {renderRoutes(routes)}
    </DiscoverWrapper>
  )
})

export default Discover

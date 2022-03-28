import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

// 样式css导入
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'
import { headerLinks } from '@/common/local-data'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

const HyAppHeader = memo(() => {
  // 逻辑代码
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link} exact>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      )
    } else {
      return <a href={item.link}>{item.title}</a>
    }
  }

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <NavLink to="/" className="logo sprite_01"></NavLink>
          <div className="select-list">
            {headerLinks.map((item, index) => {
              return (
                <div className="select-item" key={item.title}>
                  {showSelectItem(item, index)}
                </div>
              )
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            placeholder="音乐|视频|电台"
            className="search"
            prefix={<SearchOutlined />}
          />
          <button className="center">创作者中心</button>
          <button>登录</button>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
})

export default HyAppHeader

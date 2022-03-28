import styled from 'styled-components'

// 这个div的意思是外层使用div模块样式
export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;
  color: #fff;
  .content {
    height: 70px;
    display: flex;
    justify-content: space-between;
  }
  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
`
// AppHeader 里面的选项卡搭设完毕
export const HeaderLeft = styled.div`
  display: flex;
  .select-list {
    display: flex;
    .select-item {
      position: relative;
      line-height: 70px;
      a {
        font-size: 14px;
        display: block;
        padding: 0 20px;
        color: #ccc;
      }
      :last-of-type a {
        position: relative;
        ::after {
          position: absolute;
          content: '';
          width: 28px;
          height: 19px;
          background-image: url(${require('@/assets/img/sprite_01.png')});
          background-position: -190px 0;
          top: 20px;
          right: -15px;
        }
      }
      &:hover a,
      a.active {
        background: #000;
        color: #fff;
        text-decoration: none;
      }
      a.active .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-position: -226px 0;
      }
    }
  }
  .logo {
    display: block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
    text-indent: -999px;
  }
`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  color: #ccc;
  font-size: 12px;

  .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;

    input {
      &::placeholder {
        font-size: 12px;
      }
    }
  }

  .center {
    width: 90px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    color: #fff;
    border: 1px solid #666;
    border-radius: 16px;
    margin: 0 16px;
    background-color: transparent;
  }
`

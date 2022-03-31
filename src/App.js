// 上面是顶层导入
import React, { memo, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { Provider } from 'react-redux'
// 网络请求或者utils工具类文件
import store from './store'
import routes from './router'
// 组件导入
import HyAppFooter from './components/app-footer'
import HyAppHeader from './components/app-header'

const App = memo(function (props) {
  const element = useRoutes(routes)
  return (
    <Provider store={store}>
      <HyAppHeader />
      <Suspense fallback={<>...</>}>{element}</Suspense>
      <HyAppFooter />
    </Provider>
  )
})

export default App

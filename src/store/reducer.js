//合并reducer
import { combineReducers } from 'redux-immutable'
// reducer导入
import { reducer as RecommendReducer } from '../pages/discover/children-pages/recommend/store'

// 他最终会生成返回一个对象
const cReducers = combineReducers({
  recommend: RecommendReducer,
})

export default cReducers

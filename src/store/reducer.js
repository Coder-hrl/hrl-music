//合并reducer
import { combineReducers } from 'redux'

// reducer导入
import { reducer as RecommendReducer } from '../pages/discover/children-pages/recommend/store'
const cReducers = combineReducers({
  recommend: RecommendReducer,
})

export default cReducers

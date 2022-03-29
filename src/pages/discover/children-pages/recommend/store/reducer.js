import * as type from './contains'
import { Map } from 'immutable'

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case type.CHANGE_TOP_BANNERS:
      return state.set('topBanners', action.topBanners)
    case type.CHANGE_HOT_RECOMENDATIONS:
      return state.set('hotRecommends', action.hotRecommends)
    default:
      return state
  }
}

export default reducer

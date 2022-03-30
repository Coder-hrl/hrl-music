import * as type from './contains'
import { Map } from 'immutable'

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAblums: [],
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case type.CHANGE_TOP_BANNERS:
      return state.set('topBanners', action.topBanners)
    case type.CHANGE_HOT_RECOMENDATIONS:
      return state.set('hotRecommends', action.hotRecommends)
    case type.CHANGE_NEW_ALBUM:
      return state.set('newAblums', action.newAblums)
    case type.CHANGE_TOP_LIST:
      return state.set('topList', action.topList)
    default:
      return state
  }
}

export default reducer

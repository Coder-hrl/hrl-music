import * as type from './contains'

const defaultState = {
  topBanners: [],
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case type.CHANGE_TOP_BANNERS:
      return { ...state, topBanners: action.topBanners }
    default:
      return state
  }
}

export default reducer

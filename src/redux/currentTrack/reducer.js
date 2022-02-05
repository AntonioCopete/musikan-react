import * as currentTrackTypes from './types'

const initialState = {
  currentTrack: {},
}

const currentTrackReducer = (state = initialState, action) => {
  switch (action.type) {
    case currentTrackTypes.SET_CURRENT_TRACK: {
      return action.payload
    }
    default: {
      return state
    }
  }
}
export default currentTrackReducer

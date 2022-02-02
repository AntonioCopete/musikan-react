import * as TrackTypes from './types'

const initialState = {
  track: [],
}
const TrackReducer = (state = initialState, action) => {
  switch (action.type) {
    case TrackTypes.TRACK_REQUEST: {
      return action.payload
    }

    case TrackTypes.TRACK_RENDER:
      return action.payload

    default: {
      return state
    }
  }
}

export default TrackReducer

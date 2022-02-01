import * as TrackTypes from './types'

const initialState = {
  tracks: [],
}
const TrackReducer = (state = initialState, action) => {
  switch (action.type) {
    case TrackTypes.TRACK_REQUEST: {
      return action.payload
    }
    default: {
      return state
    }
  }
}

export default TrackReducer

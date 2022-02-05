import * as currentTrackTypes from './types'
import api from '../../api'
import * as auth from '../../services/auth'

export function getCurrentTrack(id) {
  return async function getCurrentTrackThunk(dispatch) {
    const token = await auth.getCurrentUserToken()
    if (!token) return
    const response = await api.getCurrentTrackInfo(
      { Authorization: `Bearer ${token}` },
      id
    )

    if (response.errorMessage) return
    dispatch(setCurrentTrack(response.data.data))
  }
}

export const setCurrentTrack = (track) => ({
  type: currentTrackTypes.SET_CURRENT_TRACK,
  payload: track,
})

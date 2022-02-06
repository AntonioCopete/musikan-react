import * as TrackTypes from './types'
import api from '../../api'
import * as auth from '../../services/auth'

export const trackRequest = (tracks) => ({
  type: TrackTypes.TRACK_REQUEST,
  payload: tracks,
})

export function getTracks(liked) {
  return async function getTracksThunk(dispatch) {
    const token = await auth.getCurrentUserToken()
    if (!token) return
    const response = await api.getTracks(
      { Authorization: `Bearer ${token}` },
      liked
    )

    if (response.errorMessage) return
    dispatch(trackRequest(response.data.data))
  }
}

export function deleteTracks(id) {
  return async function deleteTracksThunk(dispatch) {
    const token = await auth.getCurrentUserToken()
    if (!token) return
    const response = await api.deleteTrack(
      { Authorization: `Bearer ${token}` },
      id
    )
    if (response.errorMessage) return
    dispatch(renderTracks(response.data.data))
  }
}

export const renderTracks = (tracks) => ({
  type: TrackTypes.TRACK_RENDER,
  payload: tracks,
})

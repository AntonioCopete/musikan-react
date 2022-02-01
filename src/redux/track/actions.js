import * as TrackTypes from './types'
import api from '../../api'
import * as auth from '../../services/auth'

// export const trackRequest = (values) => ({
//   type: TrackTypes.TRACK_REQUEST,
//   payload: values,
// })

export const getTracks = async () => {
  const token = await auth.getCurrentUserToken()

  // dispatch(trackRequest(token))
  try {
    const he = await api.getTracks(token)
    console.log(he)
  } catch (error) {
    console.log(error)
  }
}

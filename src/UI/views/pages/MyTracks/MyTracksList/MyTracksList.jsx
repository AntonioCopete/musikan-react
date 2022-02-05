import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { getTracks } from '../../../../../redux/track/actions'
import * as auth from '../../../../../services/auth'
import api from '../../../../../api/api'

import TrackList from '../../../components/TrackList/TrackList'

function MyTracksList() {
  const dispatch = useDispatch()
  const tracks = useSelector((state) => state.track)

  useEffect(() => {
    dispatch(getTracks())
  }, [dispatch])

  const handleLike = (id) => {
    getCurrentTokenAndLike(id)
  }

  const getCurrentTokenAndLike = async (id) => {
    const token = await auth.getCurrentUserToken()
    const headers = { Authorization: `Bearer ${token}` }
    await api.likeTrack(headers, id)
  }

  return <TrackList tracks={tracks} handleLike={handleLike} owner={true}/>
}

export default MyTracksList

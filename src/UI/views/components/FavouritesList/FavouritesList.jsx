import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { getTracks } from '../../../../redux/track/actions'
import * as auth from '../../../../services/auth'
import api from '../../../../api/api'

import TrackList from '../TrackList/TrackList'

function FavouritesList() {
  const dispatch = useDispatch()
  const tracks = useSelector((state) => state.track)

  useEffect(() => {
    dispatch(getTracks('liked'))
  }, [dispatch])

  const handleLike = (id) => {
    getCurrentTokenAndLike(id)
  }

  const getCurrentTokenAndLike = async (id) => {
    const token = await auth.getCurrentUserToken()
    const headers = { Authorization: `Bearer ${token}` }
    await api.likeTrack(headers, id)
    dispatch(getTracks('liked'))
  }

  return <TrackList tracks={tracks} handleLike={handleLike} />
}

export default FavouritesList

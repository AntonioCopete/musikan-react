import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { getTracks } from '../../../../redux/track/actions'
import * as auth from '../../../../services/auth'
import api from '../../../../api/api'

import TrackList from '../TrackList/TrackList'

function FavouritesList() {
  const dispatch = useDispatch()
  const tracks = useSelector((state) => state.track)
  const { _id } = useSelector((state) => state.auth.currentUser)

  useEffect(() => {
    dispatch(getTracks('liked', _id))
  }, [dispatch])

  const handleLike = (id) => {
    getCurrentTokenAndLike(id)
  }

  const getCurrentTokenAndLike = async (id) => {
    // const token = await auth.getCurrentUserToken()
    const headers = { _id: _id }
    await api.likeTrack(headers, id)
    dispatch(getTracks('liked', _id))
  }

  return <TrackList tracks={tracks} handleLike={handleLike} />
}

export default FavouritesList

import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { getTracks } from '../../../../../redux/track/actions'
import api from '../../../../../api/api'
import TrackList from '../../../components/TrackList/TrackList'

function MyTracksList() {
  const dispatch = useDispatch()
  const tracks = useSelector((state) => state.track)
  const { _id } = useSelector((state) => state.auth.currentUser)

  useEffect(() => {
    dispatch(getTracks(null, _id))
  }, [dispatch])

  const handleLike = (id) => {
    getCurrentTokenAndLike(id)
  }

  const getCurrentTokenAndLike = async (id) => {
    const headers = { _id: _id }
    await api.likeTrack(headers, id)
  }

  return <TrackList tracks={tracks} handleLike={handleLike} owner={true} />
}

export default MyTracksList

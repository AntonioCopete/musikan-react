import { useSelector } from 'react-redux'
import { useLayoutEffect, useState } from 'react'

import api from '../../../../api/api'

import TrackList from '../TrackList/TrackList'

function FavouritesList() {
  const { _id } = useSelector((state) => state.auth.currentUser)
  const [tracks, setTracks] = useState([])

  useLayoutEffect(() => {
    getTracks()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getTracks = async () => {
    const response = await api.getTracks({ _id: _id }, 'liked')
    setTracks(response.data.data)
  }

  return (
    <>
      <TrackList tracks={tracks} isFavorites={true} reload={getTracks} />
      {tracks?.length === 0 && <p>No favorites yet, go explore new tracks!</p>}
    </>
  )
}

export default FavouritesList

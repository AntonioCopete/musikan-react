import { useState, useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'
import api from '../../../../../../api'
import Playlist from './Playlist/Playlist'

function PlaylistsFollow() {
  const { _id } = useSelector((state) => state.auth.currentUser)
  const [playlists, setPlaylists] = useState({})

  useLayoutEffect(() => {
    getUserPlaylists()
  }, [])

  const getUserPlaylists = async () => {
    const response = await api.getUserPlaylists(_id)
    setPlaylists(response.data.data)
  }

  return (
    <>
      {playlists?.followed?.length > 0 ? (
        <Playlist
          list={playlists.followed}
          followed={true}
          reload={getUserPlaylists}
        />
      ) : (
        <p>You dont follow any playlist yet</p>
      )}
    </>
  )
}

export default PlaylistsFollow

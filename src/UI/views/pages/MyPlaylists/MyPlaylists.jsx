import { useState, useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'

import api from '../../../../api'

import PanelHero from '../../components/PanelHero/PanelHero'
import Playlist from './Playlist/Playlist'

import { Header, Main } from '../../layout/Layout.styles'

function MyPlaylists() {
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
      <Header>
        <PanelHero>
          <h1>My Playlists</h1>
        </PanelHero>
      </Header>
      <Main>
        {playlists?.owned?.length > 0 ? (
          <Playlist
            list={playlists.owned}
            owned={true}
            reload={getUserPlaylists}
          />
        ) : (
          <p>You haven't created any playlist yet</p>
        )}
        <h2>Playlists you follow</h2>
        {playlists?.followed?.length > 0 ? (
          <Playlist list={playlists.followed} />
        ) : (
          <p>You dont follow any playlist yet</p>
        )}
      </Main>
    </>
  )
}

export default MyPlaylists

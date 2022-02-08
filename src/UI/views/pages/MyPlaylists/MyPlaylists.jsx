import { useState, useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'

import api from '../../../../api'

import PanelHero from '../../components/PanelHero/PanelHero'
import PlayList from './Playlist/Playlist'
import CreatePlaylistModalContainer from '../../components/CreatePlaylistModal/CreatePlaylistModalContainer/CreatePlaylistModalContainer'

import { Header, Main } from '../../layout/Layout.styles'

function MyPlaylists() {
  const { _id } = useSelector((state) => state.auth.currentUser)
  const [playlists, setPlaylists] = useState([])

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
        <CreatePlaylistModalContainer />
        <PlayList list={playlists.owned} />
        <h2>Playlists you follow</h2>
        <PlayList list={playlists.following} />
      </Main>
    </>
  )
}

export default MyPlaylists

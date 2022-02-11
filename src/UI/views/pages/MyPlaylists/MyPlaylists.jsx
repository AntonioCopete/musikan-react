import { useState, useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'
import PlaylistModal from '../../components/PlaylistModal/CreatePlaylistModalContainer/CreatePlaylistModalContainer'
import api from '../../../../api'

import UserAvatar from '../../components/UserAvatar/UserAvatar'
import UserMenu from '../../components/UserMenu/UserMenu'
import PanelHero from '../../components/PanelHero/PanelHero'
import Playlist from './Playlist/Playlist'

import { Header, Main } from '../../layout/Layout.styles'
import { CreateWrapper, ButtonModal } from './MyPlaylists.styles'

function MyPlaylists() {
  const { _id } = useSelector((state) => state.auth.currentUser)
  const [playlists, setPlaylists] = useState({})
  const [showUserMenu, setShowUserMenu] = useState(false)

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
          <UserAvatar
            showUserMenu={showUserMenu}
            setShowUserMenu={setShowUserMenu}
          />
          {showUserMenu && <UserMenu />}
          <h1>My Playlists</h1>
        </PanelHero>
      </Header>
      <Main>
        <CreateWrapper>
          {playlists?.owned?.length > 0 && (
            <Playlist
              list={playlists.owned}
              owned={true}
              reload={getUserPlaylists}
            />
          )}
          <ButtonModal>
            <PlaylistModal reload={getUserPlaylists} />
          </ButtonModal>
        </CreateWrapper>
        <h2>Playlists you follow</h2>
        {playlists?.followed?.length > 0 ? (
          <Playlist
            list={playlists.followed}
            followed={true}
            reload={getUserPlaylists}
          />
        ) : (
          <p>You dont follow any playlist yet</p>
        )}
      </Main>
    </>
  )
}

export default MyPlaylists

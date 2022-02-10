import { useState } from 'react'
import UserAvatar from '../../components/UserAvatar/UserAvatar'
import UserMenu from '../../components/UserMenu/UserMenu'
import { Header, Main } from '../../layout/Layout.styles'
import PanelHero from '../../components/PanelHero/PanelHero'
import EditPlaylistForm from './EditPlaylistForm/EditPlaylistForm'

function EditPlaylist() {
  const [showUserMenu, setShowUserMenu] = useState(false)
  return (
    <>
      <Header>
        <PanelHero>
          <UserAvatar
            showUserMenu={showUserMenu}
            setShowUserMenu={setShowUserMenu}
          />
          {showUserMenu && <UserMenu />}
          <h1>Edit Playlist</h1>
        </PanelHero>
      </Header>
      <Main>
        <EditPlaylistForm />
      </Main>
    </>
  )
}

export default EditPlaylist

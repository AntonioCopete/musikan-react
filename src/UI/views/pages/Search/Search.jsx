import { useState } from 'react'

import UserAvatar from '../../components/UserAvatar/UserAvatar'
import UserMenu from '../../components/UserMenu/UserMenu'
import { Header, Main } from '../../layout/Layout.styles'
import PanelHero from '../../components/PanelHero/PanelHero'
import SearchBox from '../../components/SearchBox/SearchBox'
import SearchPlaylist from './SearchPlaylist/SearchPlaylist'
import SearchTrack from './SearchTrack/SearchTrack'
import SearchUser from './SearchUser/SearchUser'

function Search() {
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
          <h1>Search</h1>
        </PanelHero>
      </Header>
      <Main>
        <SearchBox />
        <h2>Playlists</h2>
        <SearchPlaylist />
        <h2>Tracks</h2>
        <SearchTrack />
        <h2>Users</h2>
        <SearchUser />
      </Main>
    </>
  )
}

export default Search

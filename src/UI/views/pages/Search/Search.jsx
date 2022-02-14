import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import api from '../../../../api'

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
  const [query, setQuery] = useState()
  const [result, setResult] = useState()
  const { _id } = useSelector((state) => state.auth.currentUser)

  useEffect(() => {
    searchQuery()
  }, [query])

  const searchQuery = async () => {
    const response = await api.searchQuery({ _id: _id }, query)
    setResult(response.data)
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
          <h1>Search</h1>
        </PanelHero>
      </Header>
      <Main>
        <SearchBox setQuery={setQuery} />
        <h2>Playlists</h2>
        <SearchPlaylist playlists={result?.playlists} />
        <h2>Tracks</h2>
        <SearchTrack tracks={result?.tracks} />
        <h2>Users</h2>
        <SearchUser users={result?.users} />
      </Main>
    </>
  )
}

export default Search

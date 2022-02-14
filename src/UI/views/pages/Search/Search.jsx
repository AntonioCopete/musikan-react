import { useState } from 'react'
import UserAvatar from '../../components/UserAvatar/UserAvatar'
import UserMenu from '../../components/UserMenu/UserMenu'
import { Header, Main } from '../../layout/Layout.styles'
import PanelHero from '../../components/PanelHero/PanelHero'
import SearchBox from '../../components/SearchBox/SearchBox'

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
        results
      </Main>
    </>
  )
}

export default Search

import { useState } from 'react'
import UserAvatar from '../../components/UserAvatar/UserAvatar'
import UserMenu from '../../components/UserMenu/UserMenu'
import { Header, Main } from '../../layout/Layout.styles'
import PanelHero from '../../components/PanelHero/PanelHero'
import FavouritesList from '../../components/FavouritesList/FavouritesList'

function Favourites() {
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
          <h1>Favourites</h1>
        </PanelHero>
      </Header>
      <Main>
        <FavouritesList />
      </Main>
    </>
  )
}

export default Favourites

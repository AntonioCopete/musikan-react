import { useState } from 'react'

import UserAvatar from '../UserAvatar/UserAvatar'
import UserMenu from '../UserMenu/UserMenu'
import { HeaderWrapper } from './MySongsHeader.styles'

function FavouritesHeader() {
  const [showUserMenu, setShowUserMenu] = useState(false)

  return (
    <HeaderWrapper>
      <UserAvatar
        showUserMenu={showUserMenu}
        setShowUserMenu={setShowUserMenu}
      />
      {showUserMenu && <UserMenu />}
      <h1>Favourites</h1>
    </HeaderWrapper>
  )
}

export default FavouritesHeader

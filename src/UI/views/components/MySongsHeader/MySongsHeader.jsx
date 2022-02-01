import { useState } from 'react'

import UserAvatar from '../UserAvatar/UserAvatar'
import UserMenu from '../UserMenu/UserMenu'
import { Button } from '../../../styles/GlobalComponents/Button'
import { HeaderWrapper } from './MySongsHeader.styles'

function MySongsHeader() {
  const [showUserMenu, setShowUserMenu] = useState(false)

  return (
    <HeaderWrapper>
      <UserAvatar
        showUserMenu={showUserMenu}
        setShowUserMenu={setShowUserMenu}
      />
      {showUserMenu && <UserMenu />}
      <h1>My Songs</h1>
      <Button>Upload</Button>
    </HeaderWrapper>
  )
}

export default MySongsHeader

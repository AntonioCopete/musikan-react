import { useState } from 'react'

import UserAvatar from '../UserAvatar/UserAvatar'
import UserMenu from '../UserMenu/UserMenu'
import BasicModalContainer from "../BasicModalContainer"

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
      <BasicModalContainer btnText="Upload song" type="button" />
    </HeaderWrapper>
  )
}

export default MySongsHeader

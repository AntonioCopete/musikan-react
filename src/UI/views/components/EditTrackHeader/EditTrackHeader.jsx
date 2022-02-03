import { useState } from 'react'

import UserAvatar from '../UserAvatar/UserAvatar'
import UserMenu from '../UserMenu/UserMenu'
import { HeaderWrapper } from './EditTrackHeader.styles'

function EditTrackHeader() {
  const [showUserMenu, setShowUserMenu] = useState(false)

  return (
    <HeaderWrapper>
      <UserAvatar
        showUserMenu={showUserMenu}
        setShowUserMenu={setShowUserMenu}
      />
      {showUserMenu && <UserMenu />}
      <h1>Edit track</h1>
    </HeaderWrapper>
  )
}

export default EditTrackHeader

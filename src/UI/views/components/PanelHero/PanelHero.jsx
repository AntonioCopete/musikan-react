import { PanelWrapper, PanelContainer, PanelContent } from './PanelHero.styles'
import { useState } from 'react'
import UserAvatar from '../UserAvatar/UserAvatar'
import UserMenu from '../UserMenu/UserMenu'

function PanelHero({ children }) {
  const [showUserMenu, setShowUserMenu] = useState(false)
  return (
    <PanelWrapper>
      <PanelContainer>
        <PanelContent>
          <UserAvatar
            showUserMenu={showUserMenu}
            setShowUserMenu={setShowUserMenu}
          />
          {showUserMenu && <UserMenu />}
          {children}
        </PanelContent>
      </PanelContainer>
    </PanelWrapper>
  )
}

export default PanelHero

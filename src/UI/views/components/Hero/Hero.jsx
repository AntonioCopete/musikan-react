import { useState } from 'react'
import UserAvatar from '../UserAvatar/UserAvatar'
import UserMenu from '../UserMenu/UserMenu'

import { HeroWrapper, ImageBtn } from './Hero.styles'

function Hero({ title }) {
  const [showUserMenu, setShowUserMenu] = useState(false)
  return (
    <HeroWrapper>
      <UserAvatar
        showUserMenu={showUserMenu}
        setShowUserMenu={setShowUserMenu}
      />
      {showUserMenu && <UserMenu />}
      <h1>{title}</h1>
    </HeroWrapper>
  )
}

export default Hero

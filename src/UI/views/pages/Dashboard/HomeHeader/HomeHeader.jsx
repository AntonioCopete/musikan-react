import { useState } from 'react'
import { useSelector } from 'react-redux'

import PanelHero from '../../../components/PanelHero/PanelHero'
import UserAvatar from '../../../components/UserAvatar/UserAvatar'
import UserMenu from '../../../components/UserMenu/UserMenu'

function HomeHeader() {
  const { userName } = useSelector((state) => state.auth.currentUser)
  const [showUserMenu, setShowUserMenu] = useState(false)

  return (
    <PanelHero>
      <p>Dashboard</p>
      <UserAvatar
        showUserMenu={showUserMenu}
        setShowUserMenu={setShowUserMenu}
      />
      {showUserMenu && <UserMenu />}
      <h1>
        <span>hello</span> {userName}
      </h1>
    </PanelHero>
  )
}

export default HomeHeader

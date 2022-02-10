import { useSelector } from 'react-redux'
import { useState } from 'react'
import UserAvatar from '../../../components/UserAvatar/UserAvatar'
import UserMenu from '../../../components/UserMenu/UserMenu'
import PanelHero from '../../../components/PanelHero/PanelHero'

function HomeHeader() {
  const { userName } = useSelector((state) => state.auth.currentUser)
  const [showUserMenu, setShowUserMenu] = useState(false)

  return (
    <PanelHero>
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

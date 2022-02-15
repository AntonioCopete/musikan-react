import { useSelector } from 'react-redux'
import { useState } from 'react'
import UserAvatar from '../../../components/UserAvatar/UserAvatar'
import UserMenu from '../../../components/UserMenu/UserMenu'
import PanelHero from '../../../components/PanelHero/PanelHero'
import { Title } from './HomeHeader.styles'

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
      <Title>
        <span>hello</span> {userName}
      </Title>
    </PanelHero>
  )
}

export default HomeHeader

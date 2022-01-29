import { useState } from 'react'
import Nav from '../../components/Nav/Nav'
import UserAvatar from '../../components/UserAvatar/UserAvatar'
import UserMenu from '../../components/UserMenu/UserMenu'
import { MenuContainer } from './Dashboard.styles'

function Dashboard() {
  const [showUserMenu, setShowUserMenu] = useState(false)

  return (
    <>
      <Nav />
      <h1>Jelou página Dashboard</h1>
      <MenuContainer>
        <UserAvatar
          showUserMenu={showUserMenu}
          setShowUserMenu={setShowUserMenu}
        />
        {showUserMenu && <UserMenu />}
      </MenuContainer>
    </>
  )
}

export default Dashboard

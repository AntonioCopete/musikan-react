import { useState } from 'react'
import Layout from '../../layout/Layout'

import PanelHero from '../../components/PanelHero/PanelHero'
import UserAvatar from '../../components/UserAvatar/UserAvatar'
import UserMenu from '../../components/UserMenu/UserMenu'

function Dashboard() {
  const [showUserMenu, setShowUserMenu] = useState(false)

  return (
    <Layout
      hero={
        <PanelHero>
          <UserAvatar
            showUserMenu={showUserMenu}
            setShowUserMenu={setShowUserMenu}
          />
          {showUserMenu && <UserMenu />}
        </PanelHero>
      }
      main={'Home main content'}
    />
  )
}

export default Dashboard

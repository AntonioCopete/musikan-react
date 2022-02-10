import { useState } from 'react'
import UserAvatar from '../../components/UserAvatar/UserAvatar'
import UserMenu from '../../components/UserMenu/UserMenu'
import PanelHero from '../../components/PanelHero/PanelHero'

import { Header, Main } from '../../layout/Layout.styles'
import EditTrackForm from './EditTrackForm/EditTrackForm'

function EditTrack() {
  const [showUserMenu, setShowUserMenu] = useState(false)
  return (
    <>
      <Header>
        <PanelHero>
          <UserAvatar
            showUserMenu={showUserMenu}
            setShowUserMenu={setShowUserMenu}
          />
          {showUserMenu && <UserMenu />}
          <h1>Edit Track</h1>
        </PanelHero>
      </Header>
      <Main>
        <EditTrackForm />
      </Main>
    </>
  )
}

export default EditTrack

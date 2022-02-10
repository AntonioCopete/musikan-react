import { useState, useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'

import api from '../../../../api'

import UserAvatar from '../../components/UserAvatar/UserAvatar'
import UserMenu from '../../components/UserMenu/UserMenu'
import TrackList from '../../components/TrackList/TrackList'
import PanelHero from '../../components/PanelHero/PanelHero'

import { Header, Main } from '../../layout/Layout.styles'

function MySongs() {
  const { _id } = useSelector((state) => state.auth.currentUser)
  const [tracks, setTracks] = useState([])
  const [showUserMenu, setShowUserMenu] = useState(false)

  useLayoutEffect(() => {
    getTracks()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getTracks = async () => {
    const response = await api.getTracks({ _id: _id }, null)
    setTracks(response.data.data)
  }

  return (
    <>
      <Header>
        <PanelHero>
          <UserAvatar
            showUserMenu={showUserMenu}
            setShowUserMenu={setShowUserMenu}
          />
          {showUserMenu && <UserMenu />}
          <h1>My Tracks</h1>
        </PanelHero>
      </Header>
      <Main>
        {<TrackList tracks={tracks} owner={true} reload={getTracks} />}
      </Main>
    </>
  )
}

export default MySongs

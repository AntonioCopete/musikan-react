import { useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import PlaylistItem from '../../components/PlaylistItem/PlaylistItem'
import TrackItem from '../../components/TrackItem/TrackItem'
import PanelHero from '../../components/PanelHero/PanelHero'
import UserAvatar from '../../components/UserAvatar/UserAvatar'
import UserMenu from '../../components/UserMenu/UserMenu'
import { Avatar } from '@mui/material'

import api from '../../../../api'

import { Header, Main } from '../../layout/Layout.styles'
import { ElementsGrid, UserInfoContainer } from './UserDetail.styles'

function UserDetail() {
  const { userId } = useParams()
  const [userInfo, setUserInfo] = useState()
  const [userTracks, setUserTracks] = useState()
  const [userPlaylists, setUserPlaylists] = useState()
  const [showUserMenu, setShowUserMenu] = useState(false)

  useLayoutEffect(() => {
    getUserInfo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getUserInfo = async () => {
    const responseInfo = await api.getUserInfo(userId)
    if (responseInfo.data.success) setUserInfo(responseInfo.data.data)
    const responseTracks = await api.getUserTracks(userId)
    if (responseTracks.data.success) setUserTracks(responseTracks.data.data)
    const responsePlaylists = await api.getUserPublicPlaylists(userId)
    if (responsePlaylists.data.success)
      setUserPlaylists(responsePlaylists.data.data)
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
          <h1>User</h1>
        </PanelHero>
      </Header>
      <Main>
        <UserInfoContainer>
          <Avatar
            src={userInfo?.profilePicture}
            alt={`${userInfo?.userName}'s profile pic`}
            sx={{ width: 200, height: 200 }}
          />
          <h1>{userInfo?.userName}</h1>
        </UserInfoContainer>
        <h2>Playlists by {userInfo?.userName}</h2>
        <ElementsGrid>
          {userPlaylists &&
            userPlaylists?.map((playlist) => (
              <PlaylistItem
                key={playlist._id}
                id={playlist._id}
                name={playlist.name}
                thumbnail={playlist.thumbnail}
                reload={getUserInfo}
                // followed={}
              />
            ))}
        </ElementsGrid>
        <h2>Tracks by {userInfo?.userName}</h2>
        <ElementsGrid>
          {userTracks &&
            userTracks?.map((track) => (
              <TrackItem
                key={track._id}
                name={track.name}
                artist={track.userId.userName}
                thumbnail={track.thumbnail}
              />
            ))}
        </ElementsGrid>
      </Main>
    </>
  )
}

export default UserDetail

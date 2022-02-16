import { useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import PlaylistItem from '../../components/PlaylistItem/PlaylistItem'
import TrackItem from '../../components/TrackItem/TrackItem'
import PanelHero from '../../components/PanelHero/PanelHero'
import UserAvatar from '../../components/UserAvatar/UserAvatar'
import UserMenu from '../../components/UserMenu/UserMenu'

import api from '../../../../api'

import { Header, Main } from '../../layout/Layout.styles'
import { ElementsGrid, ImageContent, ImageWrapper } from './UserDetail.styles'

function UserDetail() {
  const { userId } = useParams()
  const { _id } = useSelector((state) => state.auth.currentUser)
  const [userInfo, setUserInfo] = useState()
  const [userTracks, setUserTracks] = useState()
  const [userPlaylists, setUserPlaylists] = useState()
  const [showUserMenu, setShowUserMenu] = useState(false)

  useLayoutEffect(() => {
    getUserInfo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getUserInfo = async () => {
    const headers = { _id: _id }
    const responseInfo = await api.getUserInfo(headers, userId)
    if (responseInfo.data.success) setUserInfo(responseInfo.data.data)
    const responseTracks = await api.getUserTracks(headers, userId)
    if (responseTracks.data.success) setUserTracks(responseTracks.data.data)
    const responsePlaylists = await api.getUserPublicPlaylists(headers, userId)
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
          <h1>Artist details</h1>
        </PanelHero>
      </Header>
      <Main>
        <ImageWrapper>
          <ImageContent bgImage={userInfo?.profilePicture} />
          <h1>{userInfo?.userName}</h1>
        </ImageWrapper>
        <h2>Playlists</h2>
        <ElementsGrid>
          {userPlaylists?.length > 0 ? (
            userPlaylists?.map((playlist) => (
              <PlaylistItem
                key={playlist._id}
                id={playlist._id}
                name={playlist.name}
                thumbnail={playlist.thumbnail}
                reload={getUserInfo}
                followed={playlist.followedBy}
                showFollow={true}
              />
            ))
          ) : (
            <p>There are no playlist yet</p>
          )}
        </ElementsGrid>
        <h2>Tracks</h2>
        <ElementsGrid>
          {userTracks?.length > 0 ? (
            userTracks?.map((track) => (
              <TrackItem
                key={track._id}
                id={track._id}
                name={track.name}
                artist={track.userId.userName}
                thumbnail={track.thumbnail}
                isLiked={track.likedBy}
              />
            ))
          ) : (
            <p>There are no tracks yet</p>
          )}
        </ElementsGrid>
      </Main>
    </>
  )
}

export default UserDetail

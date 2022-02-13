import { useState, useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'
import api from '../../../../api'
import HomeHeader from './HomeHeader/HomeHeader'
import { Header, Main } from '../../layout/Layout.styles'

import Playlist from '../MyPlaylists/Playlist/Playlist'
import PopularUsers from './HomeContent/PopularUsers/PopularUsers'
import TopPlaylists from './HomeContent/TopPlaylists/TopPlaylists'
import HomeContent from './HomeContent/HomeContent'

function Dashboard() {
  const { _id } = useSelector((state) => state.auth.currentUser)
  const [playlists, setPlaylists] = useState({})

  useLayoutEffect(() => {
    getUserPlaylists()
  }, [])

  const getUserPlaylists = async () => {
    const response = await api.getUserPlaylists(_id)
    setPlaylists(response.data.data)
  }

  return (
    <>
      <Header>
        <HomeHeader />
      </Header>
      <Main>
        <HomeContent title={'Popular profiles'} content={<PopularUsers />} />
        <HomeContent title={'Top playlists'} content={<TopPlaylists />} />
        <HomeContent title={'Popular artists'} content={<PopularUsers />} />
        <HomeContent
          title={'Playlists you follow'}
          content={
            playlists?.followed?.length > 0 ? (
              <Playlist
                list={playlists.followed}
                followed={true}
                reload={getUserPlaylists}
              />
            ) : (
              <p>You dont follow any playlist yet</p>
            )
          }
        />
      </Main>
    </>
  )
}

export default Dashboard

import { useState, useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'
import api from '../../../../api'
import HomeHeader from './HomeHeader/HomeHeader'
import { Header, Main } from '../../layout/Layout.styles'

import Playlist from '../MyPlaylists/Playlist/Playlist'
import PopularUsers from './PopularUsers/PopularUsers'

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
        <h2>Popular profiles</h2>
        <PopularUsers />
        {/*   <h2>Top playlists</h2>

        <h2>Popular artists</h2>*/}
        <h2>Playlists you follow</h2>
        {playlists?.followed?.length > 0 ? (
          <Playlist
            list={playlists.followed}
            followed={true}
            reload={getUserPlaylists}
          />
        ) : (
          <p>You dont follow any playlist yet</p>
        )}
      </Main>
    </>
  )
}

export default Dashboard

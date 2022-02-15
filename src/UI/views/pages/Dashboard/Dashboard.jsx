import HomeHeader from './HomeHeader/HomeHeader'
import { Header, Main } from '../../layout/Layout.styles'

import PopularUsers from './HomeContent/PopularUsers/PopularUsers'
import TopPlaylists from './HomeContent/TopPlaylists/TopPlaylists'
import PlaylistsFollow from './HomeContent/PlaylistsFollow/PlaylistsFollow'
import HomeContent from './HomeContent/HomeContent'

function Dashboard() {
  return (
    <>
      <Header>
        <HomeHeader />
      </Header>
      <Main container>
        <HomeContent title={'Popular profiles'} content={<PopularUsers />} />
        <HomeContent title={'Top playlists'} content={<TopPlaylists />} />
        <HomeContent
          title={'Playlists you follow'}
          content={<PlaylistsFollow />}
        />
      </Main>
    </>
  )
}

export default Dashboard

import PanelHero from '../../components/PanelHero/PanelHero'
import MyPlayList from './MyPlayList/MyPlayList'
import { Header, Main } from '../../layout/Layout.styles'
import UploadSongModalContainer from '../../components/UploadModal/UploadSongModalContainer/UploadSongModalContainer'

function MyPlaylists() {
  return (
    <>
      <Header>
        <PanelHero>
          <h1>My Playlists</h1>
        </PanelHero>
      </Header>
      <Main>
        <UploadSongModalContainer />
        <MyPlayList />
        <h2>Playlists you follow</h2>
      </Main>
    </>
  )
}

export default MyPlaylists

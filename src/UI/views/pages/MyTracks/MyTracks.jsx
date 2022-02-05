import { Header, Main } from '../../layout/Layout.styles'

import PanelHero from '../../components/PanelHero/PanelHero'

import MyTracksList from './MyTracksList/MyTracksList'
import UploadSongModalContainer from '../../components/UploadModal/UploadSongModalContainer/UploadSongModalContainer'

function MySongs() {
  return (
    <>
      <Header>
        <PanelHero>
          <h1>My Tracks</h1>
        </PanelHero>
      </Header>
      <Main>
        <UploadSongModalContainer />
        <MyTracksList />
      </Main>
    </>
  )
}

export default MySongs

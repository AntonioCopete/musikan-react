import { Header, Main } from '../../layout/Layout.styles'

import Hero from '../../components/Hero/Hero'
import MyTracksList from './MyTracksList/MyTracksList'
import UploadSongModalContainer from '../../components/UploadSong/UploadSongModalContainer/UploadSongModalContainer'

function MySongs() {
  return (
    <>
    <Header>
      <Hero title={'My Tracks'} />
      </Header>
      <Main>
        <UploadSongModalContainer />
        <MyTracksList />
      </Main>
    </>
  )
}

export default MySongs

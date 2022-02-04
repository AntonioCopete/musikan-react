import MainMenu from '../components/MainMenu/MainMenu'
import TrackInfo from '../components/TrackInfo/TrackInfo'
import AudioPlayer from '../components/AudioPlayer/AudioPlayer'
import { GridLayout, Header, Main, Aside, Footer } from './Layout.styles'

function Layout({ hero, main }) {
  return (
    <GridLayout>
      <MainMenu />
      <Header>{hero}</Header>
      <Main>{main}</Main>
      <Aside>
        <TrackInfo />
      </Aside>
      <Footer>
        <AudioPlayer />
      </Footer>
    </GridLayout>
  )
}

export default Layout

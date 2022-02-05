import { Outlet } from 'react-router-dom'

import MainMenu from '../components/MainMenu/MainMenu'
import TrackInfo from '../components/TrackInfo/TrackInfo'
import AudioPlayer from '../components/AudioPlayer/AudioPlayer'
import { GridLayout, Aside, Footer } from './Layout.styles'

function Layout() {
  return (
    <GridLayout>
      <MainMenu />
      <Outlet />
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

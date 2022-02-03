import Menu from '../components/MainMenu/Menu'
// import MainMenu from '../components/MainMenu/MainMenu'

import { GridLayout, Header, Main, Aside, Footer } from './Layout.styles'

function Layout({ hero, main }) {
  return (
    <GridLayout>
      <Menu />
      <Header>{hero}</Header>
      <Main>{main}</Main>
      <Aside>track info</Aside>
      <Footer>{/* <AudioPlayer /> */}</Footer>
    </GridLayout>
  )
}

export default Layout

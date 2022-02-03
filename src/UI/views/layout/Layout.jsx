import Menu from '../components/MainMenu/Menu'
// import MainMenu from '../components/MainMenu/MainMenu'

import { GridLayout } from './Layout.styles'

function Layout({ hero, main }) {
  return (
    <GridLayout>
      <Menu />
      <header>{hero}</header>
      <main>{main}</main>
      {/* <aside>track info</aside>
      <footer>Audio player</footer> */}
    </GridLayout>
  )
}

export default Layout

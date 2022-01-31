import Nav from '../components/Nav/Nav'

import { GridLayout } from './Layout.styles'

function Layout({ hero, main }) {
  return (
    <GridLayout>
      <header>{hero}</header>
      <main>{main}</main>
      <Nav />
      {/* <aside>track info</aside>
      <footer>Audio player</footer> */}
    </GridLayout>
  )
}

export default Layout

import { Header, Main } from '../../layout/Layout.styles'
import PanelHero from '../../components/PanelHero/PanelHero'
import FavouritesList from '../../components/FavouritesList/FavouritesList'

function Favourites() {
  return (
    <>
      <Header>
        <PanelHero>
          <h1>Favourites</h1>
        </PanelHero>
      </Header>
      <Main>
        <FavouritesList />
      </Main>
    </>
  )
}

export default Favourites

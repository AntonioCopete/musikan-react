import { Header, Main } from '../../layout/Layout.styles'
import Hero from '../../components/Hero/Hero'
import FavouritesList from '../../components/FavouritesList/FavouritesList'

function Favourites() {
  return (
    <>
      <Header>
        <Hero title={'Favourites'} />
      </Header>
      <Main>
        <FavouritesList />
      </Main>
    </>
  )
}

export default Favourites

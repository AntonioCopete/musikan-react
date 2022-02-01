import Layout from '../../layout/Layout'
import FavouritesHeader from '../../components/FavouritesHeader/FavouritesHeader'
import FavouritesList from '../../components/FavouritesList/FavouritesList'

function Favourites() {
  return <Layout hero={<FavouritesHeader />} main={<FavouritesList />} />
}

export default Favourites

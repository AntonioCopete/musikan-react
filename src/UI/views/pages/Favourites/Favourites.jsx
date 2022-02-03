import Layout from '../../layout/Layout'
import Hero from '../../components/Hero/Hero'
import FavouritesList from '../../components/FavouritesList/FavouritesList'

function Favourites() {
  return (
    <Layout hero={<Hero title={'Favourites'} />} main={<FavouritesList />} />
  )
}

export default Favourites

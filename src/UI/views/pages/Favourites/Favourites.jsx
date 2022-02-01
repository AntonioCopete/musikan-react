import Layout from '../../layout/Layout'
import MySongsHeader from '../../components/MySongsHeader/MySongsHeader'
import MySongsList from '../../components/MySongsList/MySongsList'

function Favourites() {
  return <Layout hero={<MySongsHeader />} main={<MySongsList />} />
}

export default Favourites

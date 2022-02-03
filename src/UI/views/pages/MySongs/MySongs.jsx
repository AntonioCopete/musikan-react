import Layout from '../../layout/Layout'
import Hero from '../../components/Hero/Hero'
import MySongsList from '../../components/MySongsList/MySongsList'

function MySongs() {
  return <Layout hero={<Hero title={'My Songs'} />} main={<MySongsList />} />
}

export default MySongs

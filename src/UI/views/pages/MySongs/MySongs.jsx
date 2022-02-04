import Layout from '../../layout/Layout'
import Hero from '../../components/Hero/Hero'
import MySongsList from '../../components/MySongsList/MySongsList'
import UploadSongModalContainer from '../../components/UploadSong/UploadSongModalContainer/UploadSongModalContainer'

function MySongs() {
  return (
    <Layout
      hero={<Hero title={'My Songs'} />}
      main={
        <>
          <UploadSongModalContainer />
          <MySongsList />
        </>
      }
    />
  )
}

export default MySongs

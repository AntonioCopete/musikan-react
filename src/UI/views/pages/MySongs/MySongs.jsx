import Hero from '../../components/Hero/Hero'
import MySongsList from '../../components/MySongsList/MySongsList'
import UploadSongModalContainer from '../../components/UploadSong/UploadSongModalContainer/UploadSongModalContainer'

function MySongs() {
  return (
    <>
      <Hero title={'My Songs'} />
      <main>
        <UploadSongModalContainer />
        <MySongsList />
      </main>
    </>
  )
}

export default MySongs

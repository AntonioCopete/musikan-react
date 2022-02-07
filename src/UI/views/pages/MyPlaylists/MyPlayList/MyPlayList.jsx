import SquareItem from '../../../components/SquareItem/SquareItem'

function MyPlayList() {
  return (
    <>
      <h1>playlists</h1>
      <section>
        <SquareItem />
        <SquareItem />
        <SquareItem />
      </section>

      {/* <TrackList tracks={tracks} handleLike={handleLike} owner={true} /> */}
    </>
  )
}

export default MyPlayList

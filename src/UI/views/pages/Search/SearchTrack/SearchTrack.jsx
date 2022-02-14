import TrackItem from '../../../components/TrackItem/TrackItem'
import { TrackWrapper } from './SearchTrack.styles'

function SearchTrack({ tracks }) {
  return (
    <TrackWrapper>
      {tracks?.length > 0 ? (
        tracks.map((item) => (
          <TrackItem
            key={item._id}
            id={item._id}
            name={item.name}
            artist={item.user}
            thumbnail={item.thumbnail}
          />
        ))
      ) : (
        <p>No tracks</p>
      )}
    </TrackWrapper>
  )
}

export default SearchTrack

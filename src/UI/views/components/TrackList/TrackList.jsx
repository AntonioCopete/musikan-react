import { useDispatch, useSelector } from 'react-redux'
import UploadSongModalContainer from '../UploadModal/UploadSongModalContainer/UploadSongModalContainer'

import InfoMenu from '../InfoMenu/InfoMenu'
import LikeDislike from '../LikeDislike/LikeDislike'

import { getCurrentTrack } from '../../../../redux/currentTrack/actions'

import { TrackIndex, ActionContent } from './TrackList.styles'
import { TrackWrapper, TrackGrid } from '../TrackTable/TrackTable.styles'
import { Image } from '../TrackTable/TrackItem.styles'

function TrackList({ tracks, owner, isFavorites, reload }) {
  const dispatch = useDispatch()
  const { _id } = useSelector((state) => state.auth.currentUser)

  const handlePlay = (id) => {
    dispatch(getCurrentTrack(id))
  }

  return (
    <TrackWrapper>
      <TrackGrid header>
        <span>{owner && <UploadSongModalContainer reload={reload} />}</span>
        <span>COVER</span>
        <span>TRACK</span>
        <span>ARTIST</span>
        <span>GENRE</span>
        <span></span>
      </TrackGrid>

      {tracks.length > 0 &&
        tracks.map((value, index) => (
          <TrackGrid key={value._id}>
            <TrackIndex>{index + 1}</TrackIndex>
            <span onClick={() => handlePlay(value._id)}>
              <Image
                src={value.thumbnail}
                alt={value.thumbnail}
                onClick={() => handlePlay(value._id)}
              />
            </span>
            <span>{value.name}</span>
            <span>{value.user.userName}</span>
            <span>{value.genre}</span>
            <ActionContent>
              <LikeDislike
                initialState={isFavorites ? true : value.like}
                userId={_id}
                id={value._id}
                isFavorites={isFavorites}
                reload={reload}
              />
              {owner && <InfoMenu white id={value._id} reload={reload} />}
            </ActionContent>
          </TrackGrid>
        ))}
    </TrackWrapper>
  )
}

export default TrackList

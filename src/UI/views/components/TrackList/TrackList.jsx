import { useDispatch, useSelector } from 'react-redux'
import { NavigateLink } from '../../../styles/GlobalComponents/NavLink'

import UploadSongModalContainer from '../UploadModal/UploadSongModalContainer/UploadSongModalContainer'
import InfoMenu from '../InfoMenu/InfoMenu'
import LikeDislike from '../LikeDislike/LikeDislike'

import { getCurrentTrack } from '../../../../redux/currentTrack/actions'

import { TrackIndex, ActionContent } from './TrackList.styles'
import { TrackWrapper, TrackGrid } from '../TrackTable/TrackTable.styles'
import { Image, Icon } from '../TrackTable/TrackItem.styles'

function TrackList({ tracks, owner, isFavorites, reload }) {
  const dispatch = useDispatch()
  const { _id } = useSelector((state) => state.auth.currentUser)

  const handlePlay = (id) => {
    dispatch(getCurrentTrack(id))
  }

  return (
    <TrackWrapper>
      <TrackGrid header>
        <span className="--visible">
          {owner && <UploadSongModalContainer reload={reload} />}
        </span>
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
            <Image
              bgImage={value.thumbnail}
              alt={value.thumbnail}
              className="--visible"
            >
              <Icon onClick={() => handlePlay(value._id)} />
            </Image>
            <span className="--visible">{value.name}</span>
            <NavigateLink to={`/user/${value.user._id}`} className="--visible">
              <span>{value.user.userName}</span>
            </NavigateLink>
            <span>{value.genre}</span>
            <ActionContent className="--visible">
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

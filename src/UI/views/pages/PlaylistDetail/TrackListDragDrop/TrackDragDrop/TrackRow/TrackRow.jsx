import { TrackIndex, Image, Icon } from './TrackRow.styles'
import { useDispatch } from 'react-redux'
import { getCurrentTrack } from '../../../../../../../redux/currentTrack/actions'
import { MdDragIndicator } from 'react-icons/md'

function TrackRow({ id, index, name, thumbnail, genre, user }) {
  const dispatch = useDispatch()

  const handlePlay = (id) => {
    dispatch(getCurrentTrack(id))
  }

  return (
    <>
      <TrackIndex>{index}</TrackIndex>
      <Image src={thumbnail} alt={thumbnail} onClick={() => handlePlay(id)} />
      <span>{name}</span>
      <span>{user}</span>
      <span>{genre}</span>
      <Icon>
        <MdDragIndicator />
      </Icon>
    </>
  )
}

export default TrackRow

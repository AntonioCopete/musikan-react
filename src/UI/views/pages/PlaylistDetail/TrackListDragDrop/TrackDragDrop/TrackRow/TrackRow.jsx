import { TrackIndex, Image, Icon } from './TrackRow.styles'
import { useDispatch } from 'react-redux'
import { MdDragIndicator } from 'react-icons/md'

import { getCurrentTrack } from '../../../../../../../redux/currentTrack/actions'

import { NavigateLink } from '../../../../../../styles/GlobalComponents/NavLink'

function TrackRow({ id, index, name, thumbnail, genre, user, userId }) {
  const dispatch = useDispatch()

  const handlePlay = (id) => {
    dispatch(getCurrentTrack(id))
  }

  return (
    <>
      <TrackIndex>{index}</TrackIndex>
      <Image src={thumbnail} alt={thumbnail} onClick={() => handlePlay(id)} />
      <span>{name}</span>
      <NavigateLink to={`/user/${userId}`}>
        <span>{user}</span>
      </NavigateLink>
      <span>{genre}</span>
      <Icon>
        <MdDragIndicator />
      </Icon>
    </>
  )
}

export default TrackRow

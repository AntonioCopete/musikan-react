import { TrackIndex, ItemContent, Icon, PlayIcon } from './TrackRow.styles'
import { useDispatch } from 'react-redux'
import { MdDragIndicator } from 'react-icons/md'

import { getCurrentTrack } from '../../../../../../../redux/currentTrack/actions'

import { NavigateLink } from '../../../../../../styles/GlobalComponents/NavLink'

function TrackRow({ id, index, name, thumbnail, genre, user, userId, owned }) {
  const dispatch = useDispatch()

  const handlePlay = (id) => {
    dispatch(getCurrentTrack(id))
  }

  return (
    <>
      <TrackIndex>{index}</TrackIndex>
      <ItemContent bgImage={thumbnail}>
        <PlayIcon onClick={() => handlePlay(id)} />
      </ItemContent>
      <span>{name}</span>
      <NavigateLink to={`/user/${userId}`}>
        <span>{user}</span>
      </NavigateLink>
      <span>{genre}</span>
      {owned && (
        <Icon>
          <MdDragIndicator />
        </Icon>
      )}
    </>
  )
}

export default TrackRow

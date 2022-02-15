import { useDispatch, useSelector } from 'react-redux'
import { getCurrentTrack } from '../../../../redux/currentTrack/actions'
import LikeDislike from '../LikeDislike/LikeDislike'

import {
  ItemWrapper,
  ItemContent,
  Icon,
  Text,
  TextWrapper,
} from './TrackItem.styles'

function TrackItem({ name, artist, thumbnail, isLiked, id }) {
  const dispatch = useDispatch()
  const { _id } = useSelector((state) => state.auth.currentUser)

  const handlePlay = (id) => {
    dispatch(getCurrentTrack(id))
  }

  return (
    <ItemWrapper>
      <ItemContent bgImage={thumbnail}>
        <Icon onClick={() => handlePlay(id)} />
      </ItemContent>
      <TextWrapper>
        <LikeDislike
          initialState={isLiked ? true : isLiked}
          userId={_id}
          id={id}
        />
        <Text>{name}</Text>
        <Text small>{artist}</Text>
      </TextWrapper>
    </ItemWrapper>
  )
}

export default TrackItem

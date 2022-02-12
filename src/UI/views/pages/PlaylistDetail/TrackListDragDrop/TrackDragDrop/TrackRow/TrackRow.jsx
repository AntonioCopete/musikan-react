import { TrackIndex, Image, Icon } from './TrackRow.styles'
import { MdDragIndicator } from 'react-icons/md'

function TrackRow({ index, name, thumbnail, genre, user }) {
  return (
    <>
      <TrackIndex>{index}</TrackIndex>
      <Image src={thumbnail} alt={thumbnail} />
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

import { Image } from './TrackItem.styles'

function TrackItem({ index, name, thumbnail, genre, user, action }) {
  return (
    <>
      <span>{index}</span>
      <span>
        <Image src={thumbnail} alt={thumbnail} />
      </span>
      <span>{name}</span>
      <span>{user}</span>
      <span>{genre}</span>
      <span>{action}</span>
    </>
  )
}

export default TrackItem

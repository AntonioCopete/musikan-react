import { Image } from './TrackRow.styles'

function TrackRow({ index, name, thumbnail, genre, user }) {
  return (
    <>
      <span>{index}</span>
      <span>
        <Image src={thumbnail} alt={thumbnail} />
      </span>
      <span>{name}</span>
      <span>{user}</span>
      <span>{genre}</span>
    </>
  )
}

export default TrackRow

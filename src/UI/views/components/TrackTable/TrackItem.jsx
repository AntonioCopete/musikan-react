import { Image } from './TrackItem.styles'

function TrackItem({ index, name, thumbnail, genre, user, action }) {
  return (
    <tr>
      <td>{index}</td>
      <td>
        <Image src={thumbnail} alt={thumbnail} />
      </td>
      <td>{name}</td>
      <td>{user}</td>
      <td>{genre}</td>
      <td>{action}</td>
    </tr>
  )
}

export default TrackItem

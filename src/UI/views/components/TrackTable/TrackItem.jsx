import { Image } from './TrackItem.styles'

function TrackItem({ id, name, thumbnail, genre, user, action }) {
  return (
    <tr>
      <td>{id}</td>
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

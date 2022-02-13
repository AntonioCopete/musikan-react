import {
  ItemBlue,
  ItemGreen,
  ItemMagenta,
  ItemContent,
  Text,
} from './TopPlaylists.styles'
import user1 from '../../../../../img/user1.png'
import user2 from '../../../../../img/user2.png'
import user3 from '../../../../../img/user3.png'

function TopPlaylists() {
  return (
    <>
      <ItemBlue>
        <ItemContent bgImage={user1} />
        <Text>Playlist 1</Text>
      </ItemBlue>
      <ItemGreen>
        <ItemContent bgImage={user2} />
        <Text>Playlist 2</Text>
      </ItemGreen>
      <ItemMagenta>
        <ItemContent bgImage={user3} />
        <Text>Playlist 3</Text>
      </ItemMagenta>
    </>
  )
}

export default TopPlaylists

import PlaylistItem from '../../../components/PlaylistItem/PlaylistItem'
import { PlaylistWrapper } from './SearchPlaylist.styles'

function SearchPlaylist({ playlists }) {
  return (
    <PlaylistWrapper>
      {playlists?.length > 0 ? (
        playlists.map((item) => (
          <PlaylistItem
            id={item._id}
            name={item.name}
            thumbnail={item.thumbnail}
            // followed={followed}
            // reload={reload}
          />
        ))
      ) : (
        <p>No playlists</p>
      )}
    </PlaylistWrapper>
  )
}

export default SearchPlaylist

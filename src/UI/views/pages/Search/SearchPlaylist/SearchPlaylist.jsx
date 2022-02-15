import PlaylistItem from '../../../components/PlaylistItem/PlaylistItem'
import { PlaylistWrapper } from './SearchPlaylist.styles'

function SearchPlaylist({ playlists }) {
  return (
    <PlaylistWrapper>
      {console.log(playlists)}
      {playlists?.length > 0 ? (
        playlists.map((item) => (
          <PlaylistItem
            key={item._id}
            id={item._id}
            name={item.name}
            thumbnail={item.thumbnail}
            followed={item.isFollowed}
            showFollow={true}
          />
        ))
      ) : (
        <p>No playlists</p>
      )}
    </PlaylistWrapper>
  )
}

export default SearchPlaylist

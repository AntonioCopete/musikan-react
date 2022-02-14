import { useState } from 'react'
import PlaylistItem from '../../../components/PlaylistItem/PlaylistItem'

function SearchUser() {
  const [playlist, setPlaylist] = useState([])
  return (
    <>
      {playlist.length > 0 ? (
        playlist.map(
          <PlaylistItem
            id={playlist._id}
            name={playlist.name}
            thumbnail={playlist.thumbnail}
            // followed={followed}
            // reload={reload}
          />
        )
      ) : (
        <p>No playlist found in your search</p>
      )}
    </>
  )
}

export default SearchUser

import { useEffect, useState } from 'react'

import PlaylistItem from '../../../components/PlaylistItem/PlaylistItem'
import { Wrapper } from './Playist.styles'

function Playlist({ list }) {
  const [playlist, setPlaylist] = useState(list)

  useEffect(() => {
    setPlaylist(list)
  }, [list])

  return (
    <Wrapper>
      {playlist &&
        playlist.map((item) => (
          <PlaylistItem
            id={item._id}
            name={item.name}
            thumbnail={item.thumbnail}
          />
        ))}
    </Wrapper>
  )
}

export default Playlist

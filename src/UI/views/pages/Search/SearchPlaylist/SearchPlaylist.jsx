import { useEffect, useState } from 'react'
import PlaylistItem from '../../../components/PlaylistItem/PlaylistItem'
import { PlaylistWrapper } from './SearchPlaylist.styles'
import pic from '../../../../img/noImage.jpg'
const data = [
  { _id: '1', name: 'tup', thumbnail: pic },
  { _id: '2', name: 'tip', thumbnail: pic },
]

function SearchPlaylist() {
  const [playlist, setPlaylist] = useState([])
  console.log(playlist)

  useEffect(() => {
    setPlaylist(data)
  })
  return (
    <PlaylistWrapper>
      {playlist.length > 0 ? (
        playlist.map((item) => (
          <PlaylistItem
            id={item._id}
            name={item.name}
            thumbnail={item.thumbnail}
            // followed={followed}
            // reload={reload}
          />
        ))
      ) : (
        <p>No playlist found in your search</p>
      )}
    </PlaylistWrapper>
  )
}

export default SearchPlaylist

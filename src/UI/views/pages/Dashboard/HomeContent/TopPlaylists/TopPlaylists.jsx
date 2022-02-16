import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import api from '../../../../../../api/api'

import {
  Wrapper,
  ItemBlue,
  ItemGreen,
  ItemMagenta,
  ItemContent,
  Text,
} from './TopPlaylists.styles'

function TopPlaylists() {
  const { _id } = useSelector((state) => state.auth.currentUser)
  const [playlists, setPlaylists] = useState()
  const amountPlaylistsToDisplay = 3

  useEffect(() => {
    getPopularPlaylists()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getPopularPlaylists = async () => {
    const response = await api.getPopularPlaylists({ _id: _id })
    setPlaylists(response.data.data.publicList)
  }

  return (
    <Wrapper>
      {playlists &&
        // eslint-disable-next-line array-callback-return
        playlists?.map((playlist, index) => {
          if (index < amountPlaylistsToDisplay) {
            switch (index + 1) {
              case 1:
                return (
                  <ItemBlue key={playlist._id} to={`/playlist/${playlist._id}`}>
                    <ItemContent bgImage={playlist.thumbnail} />
                    <Text>{playlist.name}</Text>
                  </ItemBlue>
                )
              case 2:
                return (
                  <ItemGreen
                    key={playlist._id}
                    to={`/playlist/${playlist._id}`}
                  >
                    <ItemContent bgImage={playlist.thumbnail} />
                    <Text>{playlist.name}</Text>
                  </ItemGreen>
                )
              case 3:
                return (
                  <ItemMagenta
                    key={playlist._id}
                    to={`/playlist/${playlist._id}`}
                  >
                    <ItemContent bgImage={playlist.thumbnail} />
                    <Text>{playlist.name}</Text>
                  </ItemMagenta>
                )
              default:
                return (
                  <ItemBlue key={playlist._id}>
                    <ItemContent bgImage={playlist.thumbnail} />
                    <Text>{playlist.name}</Text>
                  </ItemBlue>
                )
            }
          }
        })}
    </Wrapper>
  )
}

export default TopPlaylists

import { useState, useLayoutEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import api from '../../../../api'

import TrackTable from '../../components/TrackTable/TrackTable'
import PlaylistMenu from '../../components/PlaylistMenu/PlaylistMenu'

import { Header, Main } from '../../layout/Layout.styles'
import { PlaylistWrapper, Hero, HeroDetails } from './PlaylistDetail.styles.js'
import AddTracksModalContainer from '../../components/AddTracksModal/AddTracksModalContainer/AddTracksModalContainer'

function PlaylistDetail() {
  const { id } = useParams()
  const [playlist, setPlaylist] = useState()
  const [owned, setOwned] = useState()
  const { _id } = useSelector((state) => state.auth.currentUser)

  useLayoutEffect(() => {
    getPlaylist()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getPlaylist = async () => {
    const response = await api.getPlaylist({ _id: _id }, id)
    setPlaylist(response.data.data.playlistDetails)
    setOwned(response.data.data.owned)
  }

  return (
    <>
      <Header>
        <Hero bgImage={playlist?.thumbnail}>
          <HeroDetails>
            <h1>{playlist?.name}</h1>
            <PlaylistMenu playlistId={id} owner={owned} reload={getPlaylist} />
            <p>{playlist?.description}</p>
          </HeroDetails>
        </Hero>
      </Header>
      <Main>
        <AddTracksModalContainer />
        <PlaylistWrapper>
          <TrackTable tracks={playlist?.tracks} reload={getPlaylist} />
        </PlaylistWrapper>
      </Main>
    </>
  )
}

export default PlaylistDetail

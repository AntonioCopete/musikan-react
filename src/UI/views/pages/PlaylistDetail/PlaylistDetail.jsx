import { useState, useLayoutEffect } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../../../api'

import TrackTable from '../../components/TrackTable/TrackTable'

import { Header, Main } from '../../layout/Layout.styles'
// import bgImage from '../../../img/glory-box.jpg'
import { PlaylistWrapper, Hero, HeroDetails } from './PlaylistDetail.styles.js'
import AddTracksModalContainer from '../../components/AddTracksModal/AddTracksModalContainer/AddTracksModalContainer'

function PlaylistDetail() {
  const { id } = useParams()
  const [playlist, setPlaylist] = useState()

  useLayoutEffect(() => {
    getPlaylist()
  }, [])

  const getPlaylist = async () => {
    const response = await api.getPlaylist(id)
    setPlaylist(response.data.data)
  }

  return (
    <>
      <Header>
        {/* <Hero bgImage={playlist.image}> */}
        <Hero>
          <HeroDetails>
            {/* <h1>{playlist.name}</h1>
            <p>{playlist.description}</p> */}
          </HeroDetails>
        </Hero>
      </Header>
      <Main>
        <AddTracksModalContainer />
        <PlaylistWrapper>
          {/* <TrackTable tracks={playlist.tracks} reload={getPlaylist} /> */}
        </PlaylistWrapper>
      </Main>
    </>
  )
}

export default PlaylistDetail

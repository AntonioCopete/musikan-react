import { useState, useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'

import TrackList from '../../components/TrackList/TrackList'
import api from '../../../../api'

import { Header, Main } from '../../layout/Layout.styles'
import bgImage from '../../../img/glory-box.jpg'

import { PlaylistWrapper, Hero, HeroDetails } from './PlaylistDetail.styles.js'

function PlaylistDetail() {
  const { _id } = useSelector((state) => state.auth.currentUser)
  const [tracks, setTracks] = useState([])

  useLayoutEffect(() => {
    getTracks()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getTracks = async () => {
    const response = await api.getTracks({ _id: _id }, null)
    setTracks(response.data.data)
  }
  return (
    <>
      <Header>
        <Hero bgImage={bgImage}>
          <HeroDetails>
            <h1>Playlist name</h1>
            <p>playlist description</p>
          </HeroDetails>
        </Hero>
      </Header>
      <Main>
        <PlaylistWrapper>
          <TrackList tracks={tracks} owner={true} reload={getTracks} />
        </PlaylistWrapper>
      </Main>
    </>
  )
}

export default PlaylistDetail

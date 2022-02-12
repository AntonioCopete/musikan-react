import { useState, useLayoutEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import api from '../../../../api'

import PlaylistMenu from '../../components/PlaylistMenu/PlaylistMenu'
import FollowItem from '../../components/FollowItem/FollowItem'

import { Header, Main } from '../../layout/Layout.styles'
import {
  Hero,
  HeroInfoWrapper,
  HeroInfoContent,
  HeroTitle,
  HeroInfo,
} from './PlaylistDetail.styles.js'
import TrackListDragDrop from './TrackListDragDrop/TrackListDragDrop'

function PlaylistDetail() {
  const { id } = useParams()
  const [playlist, setPlaylist] = useState()
  const [owned, setOwned] = useState()
  const [follow, setFollow] = useState(true)
  const { _id } = useSelector((state) => state.auth.currentUser)
  const [tracks, setTracks] = useState([])

  useLayoutEffect(() => {
    getPlaylist()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getPlaylist = async () => {
    const response = await api.getPlaylist({ _id: _id }, id)
    setPlaylist(response.data.data)
    setOwned(response.data.data.owned)
    setFollow(response.data.data.followed)
    setTracks(response.data.data.tracks)
  }

  return (
    <>
      <Header>
        <Hero bgImage={playlist?.thumbnail}>
          <HeroInfoWrapper>
            <HeroInfoContent>
              <img src={playlist?.thumbnail} alt={playlist?.thumbnail} />

              <HeroInfo>
                {!owned && (
                  <FollowItem userId={_id} id={id} initialState={follow} />
                )}
                <HeroTitle>
                  <h1>{playlist?.name}</h1>
                  <PlaylistMenu playlistId={id} owner={owned} />
                </HeroTitle>
              </HeroInfo>
            </HeroInfoContent>
            <p>{playlist?.description}</p>
          </HeroInfoWrapper>
        </Hero>
      </Header>
      <Main>
        <TrackListDragDrop list={tracks} />
      </Main>
    </>
  )
}

export default PlaylistDetail

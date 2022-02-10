import { useState, useLayoutEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import pic from '../../../img/noImage.jpg'
import api from '../../../../api'

import TrackTable from '../../components/TrackTable/TrackTable'
import TrackItem from '../../components/TrackTable/TrackItem'
import PlaylistMenu from '../../components/PlaylistMenu/PlaylistMenu'
import AddTracksModalContainer from '../../components/AddTracksModal/AddTracksModalContainer/AddTracksModalContainer'
import FollowItem from '../../components/FollowItem/FollowItem'

import { Header, Main } from '../../layout/Layout.styles'
import {
  PlaylistWrapper,
  Hero,
  HeroInfoWrapper,
  HeroInfoContent,
  HeroTitle,
  HeroInfo,
} from './PlaylistDetail.styles.js'

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
    setPlaylist(response.data.data.playlistDetails)
    setOwned(response.data.data.owned)
    setFollow(response.data.data.followed)
    setTracks(response.data.data.playlistDetails.tracks)
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
        <PlaylistWrapper>
          {tracks && tracks.length > 0 ? (
            <TrackTable
              button={
                tracks.length > 0 ? (
                  <AddTracksModalContainer
                    tracks={tracks}
                    reload={getPlaylist}
                  />
                ) : null
              }
            >
              {tracks.map((track, index) => (
                <TrackItem
                  key={index}
                  index={index + 1}
                  name={track.name}
                  thumbnail={track.thumbnail}
                />
              ))}
            </TrackTable>
          ) : (
            <p>No tracks yet in this playlist</p>
          )}
        </PlaylistWrapper>
      </Main>
    </>
  )
}

export default PlaylistDetail

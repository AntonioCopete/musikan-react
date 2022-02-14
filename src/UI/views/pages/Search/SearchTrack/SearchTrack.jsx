import { useState, useEffect } from 'react'
import TrackItem from '../../../components/TrackItem/TrackItem'
import { TrackWrapper } from './SearchTrack.styles'

function SearchTrack({ tracks }) {
  return (
    <TrackWrapper>
      {tracks?.length > 0 ? (
        tracks.map((item) => (
          <TrackItem
            id={item.id}
            name={item.name}
            artist={item.user}
            thumbnail={item.thumbnail}
          />
        ))
      ) : (
        <p>No tracks</p>
      )}
    </TrackWrapper>
  )
}

export default SearchTrack

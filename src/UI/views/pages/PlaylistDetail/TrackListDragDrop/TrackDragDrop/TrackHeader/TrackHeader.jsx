import { TrackWrapper, TrackGrid } from './TrackHeader.styles'

function TrackTable({ button, children }) {
  return (
    <TrackWrapper>
      <TrackGrid header>
        <span>{button}</span>
        <span>COVER</span>
        <span>TRACK</span>
        <span>ARTIST</span>
        <span>GENRE</span>
        <span></span>
      </TrackGrid>
      {children}
    </TrackWrapper>
  )
}

export default TrackTable

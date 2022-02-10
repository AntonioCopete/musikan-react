import { TrackWrapper, TrackGrid } from './TrackTable.styles'

function TrackTable({ button, children }) {
  return (
    <TrackWrapper>
      <TrackGrid header>
        <span>{button}</span>
        <span>COVER</span>
        <span>TRACK</span>
        <span>ARTIST</span>
        <span>GENRE</span>
        <span>{'action'}</span>
      </TrackGrid>

      <TrackGrid>{children}</TrackGrid>
    </TrackWrapper>
  )
}

export default TrackTable

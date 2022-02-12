import { useEffect, useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import api from '../../../../../api'
import { TrackGrid, TrackWrapper } from './TrackListDraggable.styles'

import AddTracksModalContainer from '../../../components/AddTracksModal/AddTracksModalContainer/AddTracksModalContainer'

const reorder = (list, startIndex, endIndex) => {
  const result = [...list]
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

function Playlist({ list, owned, reload }) {
  const { _id } = useSelector((state) => state.auth.currentUser)
  const [playlist, setPlaylist] = useState(list)
  const playlistId = useParams().id

  useEffect(() => {
    setPlaylist(list)
    console.log(playlist)
  }, [list])

  const handleDragEnd = (result) => {
    const newOrder = {
      track: result.draggableId,
      index: result.destination.index,
    }
    api.orderPlaylistTracks({ _id: _id }, newOrder, playlistId)
  }

  return (
    <DragDropContext
      onDragEnd={(result) => {
        handleDragEnd(result)

        const { source, destination } = result
        if (!destination) {
          return
        }
        if (
          source.index === destination.index &&
          source.droppableId === destination.droppableId
        ) {
          return
        }

        setPlaylist((prevPlaylist) =>
          reorder(prevPlaylist, source.index, destination.index)
        )
      }}
    >
      <TrackGrid header>
        <span>
          <AddTracksModalContainer reload={reload} />
        </span>
        <span>COVER</span>
        <span>TRACK</span>
        <span>ARTIST</span>
        <span>GENRE</span>
        <span></span>
      </TrackGrid>
      <Droppable droppableId="playlists">
        {(droppableProvided) => (
          <TrackWrapper
            {...droppableProvided.droppableProps}
            ref={droppableProvided.innerRef}
          >
            {playlist &&
              playlist.map((value, index) => {
                return (
                  <Draggable
                    key={value._id}
                    draggableId={value._id}
                    index={index}
                  >
                    {(draggableProvided) => (
                      <span
                        {...draggableProvided.draggableProps}
                        ref={draggableProvided.innerRef}
                        {...draggableProvided.dragHandleProps}
                      >
                        <TrackGrid key={value._id}>
                          <span>{index + 1}</span>
                          <span>{value.name}</span>
                          <span>{value.user.userName}</span>
                          <span>{value.genre.name}</span>
                        </TrackGrid>
                      </span>
                    )}
                  </Draggable>
                )
              })}

            {droppableProvided.placeholder}
          </TrackWrapper>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default Playlist

import { useEffect, useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import TrackHeader from './TrackDragDrop/TrackHeader/TrackHeader'
import TrackRow from './TrackDragDrop/TrackRow/TrackRow'

import { TrackGrid } from './TrackDragDrop/TrackHeader/TrackHeader.styles'

import AddTracksModal from '../../../components/AddTracksModal/AddTracksModalContainer/AddTracksModalContainer'
import api from '../../../../../api'

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
      <TrackHeader button={owned && <AddTracksModal reload={reload} />}>
        <Droppable droppableId="playlists">
          {(droppableProvided) => (
            <div
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
                      isDragDisabled={!owned}
                    >
                      {(draggableProvided) => (
                        <TrackGrid
                          {...draggableProvided.draggableProps}
                          ref={draggableProvided.innerRef}
                          {...draggableProvided.dragHandleProps}
                        >
                          <TrackRow
                            index={index + 1}
                            id={value._id}
                            name={value.name}
                            thumbnail={value.thumbnail}
                            genre={value.genre.name}
                            user={value.user.userName}
                            userId={value.user._id}
                            owned={owned}
                          />
                        </TrackGrid>
                      )}
                    </Draggable>
                  )
                })}

              {droppableProvided.placeholder}
            </div>
          )}
        </Droppable>
      </TrackHeader>
    </DragDropContext>
  )
}

export default Playlist

import { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import PlaylistItem from '../../../components/PlaylistItem/PlaylistItem'
import { Wrapper } from './Playist.styles'

const reorder = (list, startIndex, endIndex) => {
  const result = [...list]
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

function Playlist({ list }) {
  const [playlist, setPlaylist] = useState(list)

  return (
    <DragDropContext
      onDragEnd={(result) => {
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
      <Droppable droppableId="playlists" direction="horizontal">
        {(droppableProvided) => (
          <Wrapper
            {...droppableProvided.droppableProps}
            ref={droppableProvided.innerRef}
          >
            {console.log(playlist)}
            {playlist &&
              playlist.map((item, idx) => (
                <Draggable key={item._id} draggableId={item._id} index={idx}>
                  {(draggableProvided) => (
                    <span
                      {...draggableProvided.draggableProps}
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.dragHandleProps}
                    >
                      <PlaylistItem
                        id={item._id}
                        name={item.name}
                        thumbnail={item.thumbnail}
                      />
                    </span>
                  )}
                </Draggable>
              ))}

            {droppableProvided.placeholder}
          </Wrapper>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default Playlist

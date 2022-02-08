import { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import pic from '../../../../img/noImage.jpg'

import PlaylistItem from '../../../components/PlaylistItem/PlaylistItem'
import { Wrapper } from './Playist.styles'

const initial = [
  { id: '1', text: 'playlist 1', thumbnail: pic },
  { id: '2', text: 'playlist 2', thumbnail: pic },
  { id: '3', text: 'playlist 3', thumbnail: pic },
  { id: '4', text: 'playlist 4', thumbnail: pic },
  { id: '5', text: 'playlist 5', thumbnail: pic },
]

const reorder = (list, startIndex, endIndex) => {
  const result = [...list]
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

function Playlist() {
  const [playList, setPlaylist] = useState(initial)
  console.log(playList)

  return (
    <DragDropContext
      onDragEnd={(result) => {
        console.log(result)
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
            <PlaylistItem />
            {playList.map((item, idx) => (
              <Draggable key={item.id} draggableId={item.id} index={idx}>
                {(draggableProvided) => (
                  <span
                    {...draggableProvided.draggableProps}
                    ref={draggableProvided.innerRef}
                    {...draggableProvided.dragHandleProps}
                  >
                    <PlaylistItem
                      id={item.id}
                      name={item.text}
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

import SquareItem from '../../../components/SquareItem/SquareItem'
// import Swiper from '../../../components/Swiper/Swiper'
// import { SwiperSlide } from 'swiper/react'
import { Wrapper } from './Playist.styles'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { useState } from 'react'

const initial = [
  { id: '1', text: 'a' },
  { id: '2', text: 'b' },
  { id: '3', text: 'c' },
  { id: '4', text: 'd' },
  { id: '5', text: 'e' },
]

const reorder = (list, startIndex, endIndex) => {
  const result = [...list]
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

function Playlist() {
  const [playList, setPlayList] = useState(initial)
  console.log(playList)

  return (
    <>
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

          setPlayList((prevPlayList) =>
            reorder(prevPlayList, source.index, destination.index)
          )
        }}
      >
        <Droppable droppableId="playlists" direction="horizontal">
          {(droppableProvided) => (
            <Wrapper
              {...droppableProvided.droppableProps}
              ref={droppableProvided.innerRef}
            >
              {/* <Wrapper> */}
              {playList.map((el, idx) => (
                <Draggable key={el.id} draggableId={el.id} index={idx}>
                  {(draggableProvided) => (
                    <li
                      {...draggableProvided.draggableProps}
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.dragHandleProps}
                    >
                      {el.text}
                      {/* <SquareItem /> */}
                    </li>
                  )}
                </Draggable>
              ))}

              {droppableProvided.placeholder}
              {/* </Wrapper> */}
            </Wrapper>
          )}
        </Droppable>
      </DragDropContext>

      {/* <Wrapper>
        <SquareItem />
        <SquareItem />
        <SquareItem />
        <SquareItem />
      </Wrapper> */}
    </>
  )
}

export default Playlist

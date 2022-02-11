import { useEffect, useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import api from '../../../../../api'
import LikeDislike from '../../../components/LikeDislike/LikeDislike'

import PlaylistItem from '../../../components/PlaylistItem/PlaylistItem'
import { ActionContent } from '../../../components/TrackList/TrackList.styles'
import { Image } from '../../../components/TrackTable/TrackItem.styles'
import {
  TrackGrid,
  TrackWrapper,
} from '../../../components/TrackTable/TrackTable.styles'
// import CreatePlaylistModalContainer from '../../../components/CreatePlaylistModal/CreatePlaylistModalContainer/CreatePlaylistModalContainer'
import { Wrapper } from './Playist.styles'

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
      <TrackGrid header>
        {/* <span>{owner && <UploadSongModalContainer reload={reload} />}</span> */}
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
            {/* {owned && <CreatePlaylistModalContainer reload={reload} />} */}
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
                        {/* <PlaylistItem
                        id={item._id}
                        name={item.name}
                        thumbnail={item.thumbnail}
                      /> */}
                        <TrackGrid key={value._id}>
                          <span>{index + 1}</span>
                          {/* <span onClick={() => handlePlay(value._id)}>
                          <Image
                            src={value.thumbnail}
                            alt={value.thumbnail}
                            onClick={() => handlePlay(value._id)}
                          />
                        </span> */}
                          <span>{value.name}</span>
                          <span>{value.user.userName}</span>
                          <span>{value.genre.name}</span>
                          {/* <ActionContent>
              <LikeDislike
                initialState={isFavorites ? true : value.like}
                userId={_id}
                id={value._id}
                isFavorites={isFavorites}
                reload={reload}
              />
              {owner && <InfoMenu id={value._id} reload={reload} />}
            </ActionContent> */}
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

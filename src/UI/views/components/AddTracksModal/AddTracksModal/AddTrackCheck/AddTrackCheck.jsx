import { useState } from 'react'

import { RiAddBoxLine, RiAddBoxFill } from 'react-icons/ri'

function AddTrackCheck({ trackId, setSelectedTracksToAdd }) {
  const [addTrackCheck, setAddTrackCheck] = useState(false)

  const handleClick = (action) => {
    setAddTrackCheck(!addTrackCheck)
    if (action === 'add') {
      setSelectedTracksToAdd((prevState) => [...prevState, trackId])
    } else if (action === 'remove') {
      setSelectedTracksToAdd((prevState) =>
        prevState.filter((track) => track !== trackId)
      )
    }
  }

  return (
    <>
      {addTrackCheck ? (
        <RiAddBoxFill
          onClick={() => {
            handleClick('remove')
          }}
        />
      ) : (
        <RiAddBoxLine
          onClick={() => {
            handleClick('add')
          }}
        />
      )}
    </>
  )
}

export default AddTrackCheck

import { useState } from 'react'

import { IconLine, IconFill } from './AddTrackCheck.styles'

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
        <IconFill
          onClick={() => {
            handleClick('remove')
          }}
        />
      ) : (
        <IconLine
          onClick={() => {
            handleClick('add')
          }}
        />
      )}
    </>
  )
}

export default AddTrackCheck

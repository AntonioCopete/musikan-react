import { useState } from 'react'

import AddTracksTriggerModal from '../AddTracksTriggerModal/AddTracksTriggerModal'
import AddTracksModal from '../AddTracksModal/AddTracksModal'

function AddTracksModalContainer({ reload, tracks }) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <AddTracksTriggerModal handleOpen={handleOpen} />
      <AddTracksModal
        reload={reload}
        open={open}
        handleClose={handleClose}
        tracks={tracks}
      />
    </>
  )
}

export default AddTracksModalContainer

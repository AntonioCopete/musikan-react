import { useState } from 'react'

import CreatePlaylistTriggerModal from '../CreatePlaylistTriggerModal/CreatePlaylistTriggerModal'
import CreatePlaylistModal from '../CreatePlaylistModal/CreatePlaylistModal'

function CreatePlaylistModalContainer({ reload }) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <CreatePlaylistTriggerModal handleOpen={handleOpen} />
      <CreatePlaylistModal
        reload={reload}
        open={open}
        handleClose={handleClose}
      />
    </>
  )
}

export default CreatePlaylistModalContainer

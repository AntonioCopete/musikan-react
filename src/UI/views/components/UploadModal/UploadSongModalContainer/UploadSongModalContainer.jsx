import { useState } from 'react'

import UploadTriggerModal from '../UploadTriggerModal/UploadTriggerModal'
import UploadSongModal from '../UploadSongModal/UploadSongModal'

function UploadSongModalContainer({ reload }) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <UploadTriggerModal handleOpen={handleOpen} />
      <UploadSongModal reload={reload} open={open} handleClose={handleClose} />
    </>
  )
}

export default UploadSongModalContainer

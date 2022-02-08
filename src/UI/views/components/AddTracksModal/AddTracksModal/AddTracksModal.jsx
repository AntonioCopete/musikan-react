import { useLayoutEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import api from '../../../../../api'

import Spinner from '../../Spinner/Spinner'
import { Modal } from '@mui/material'
import {
  ModalContent,
  SectionModal,
  FormModal,
  FooterModal,
} from './AddTracksModal.styles'
import { Button } from '../../../../styles/GlobalComponents/Button'
import { ButtonLink } from '../../../../styles/GlobalComponents/NavLink'

function AddTracksModal({ open, handleClose, reload }) {
  const playlistAccessInputRef = useRef()
  const [tracks, setTracks] = useState([])
  const [error, setError] = useState('')
  const [disableSaveBtn, setDisableSaveBtn] = useState(false)

  const { _id } = useSelector((state) => state.auth.currentUser)

  useLayoutEffect(() => {
    // getTracksForPlaylist()
  }, [])

  const getTracksForPlaylist = () => {
    const response = api.getTracksForPlaylist({ _id: _id })
    setTracks(response.data.data)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    createPlaylistRequest()
  }

  const handleCancel = (e) => {
    e.preventDefault()
    handleClose()
  }

  const createPlaylistRequest = () => {
    // if (playlistImageInputRef.current.value === '')
    //   return setError('You have to select a playlist image')

    setDisableSaveBtn(true)

    const selectedPlaylistAccess = playlistAccessInputRef.current.checked

    const formData = new FormData()
    formData.append('publicAccessible', selectedPlaylistAccess)

    api.addTrackstoPlaylist({ _id: _id }, formData).then((response) => {
      console.log(response)
      if (response.data.success) {
        reload()
        setDisableSaveBtn(false)
        handleClose()
      }
    })
  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContent>
          {disableSaveBtn && <Spinner />}
          <h1>Add track to my playlist</h1>
          <FormModal onSubmit={handleSubmit}>
            <SectionModal></SectionModal>
            <FooterModal>
              <ButtonLink type="text" onClick={handleCancel}>
                Cancel
              </ButtonLink>
              <Button disabled={disableSaveBtn} primary type="submit">
                Save
              </Button>
            </FooterModal>
          </FormModal>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddTracksModal

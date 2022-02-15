import { useState, useLayoutEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import api from '../../../../../api'

import AddTrackCheck from './AddTrackCheck/AddTrackCheck'
import Spinner from '../../Spinner/Spinner'

import { Modal } from '@mui/material'

import { TrackWrapper, TrackGrid } from './TrackTable.styles'
import { ActionContent } from './TrackList.styles'

import {
  ModalContent,
  FormModal,
  FooterModal,
  Image,
  ItemText,
} from './AddTracksModal.styles'
import { Button } from '../../../../styles/GlobalComponents/Button'
import { ButtonLink } from '../../../../styles/GlobalComponents/NavLink'

function AddTracksModal({ open, handleClose, reload }) {
  const { id } = useParams()
  const { _id } = useSelector((state) => state.auth.currentUser)
  const [selectedTracksToAdd, setSelectedTracksToAdd] = useState([])
  const [disableSaveBtn, setDisableSaveBtn] = useState(false)
  const [tracksToAdd, setTracksToAdd] = useState()

  useLayoutEffect(() => {
    getTracksToAdd()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getTracksToAdd = async () => {
    const headers = { _id: _id }
    const response = await api.getTracksToAdd(headers, id)
    setTracksToAdd(response.data.data)
  }

  const addTrackstoPlaylist = () => {
    setDisableSaveBtn(true)

    api
      .addTrackstoPlaylist({ _id: _id }, { tracks: selectedTracksToAdd }, id)
      .then((response) => {
        if (response.data.success) {
          setSelectedTracksToAdd([])
          if (reload) reload()
          getTracksToAdd()
          setDisableSaveBtn(false)
          handleClose()
        }
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addTrackstoPlaylist()
  }

  const handleCancel = (e) => {
    e.preventDefault()
    handleClose()
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalContent>
        {disableSaveBtn && <Spinner />}
        <h1>Add track</h1>
        <FormModal onSubmit={handleSubmit}>
          <TrackWrapper>
            {tracksToAdd?.map((track, index) => (
              <TrackGrid key={index}>
                <Image src={track.thumbnail} />
                <ItemText>{track.name}</ItemText>
                <ItemText>{track.userId.userName}</ItemText>
                <ActionContent>
                  <AddTrackCheck
                    trackId={track._id}
                    setSelectedTracksToAdd={setSelectedTracksToAdd}
                  />
                </ActionContent>
              </TrackGrid>
            ))}
          </TrackWrapper>

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
  )
}

export default AddTracksModal

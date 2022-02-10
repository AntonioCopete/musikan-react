import { useState, useLayoutEffect, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import api from '../../../../../api'

import AddTrackCheck from './AddTrackCheck/AddTrackCheck'
import Spinner from '../../Spinner/Spinner'

import { Modal } from '@mui/material'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import {
  ModalContent,
  SectionModal,
  FormModal,
  FooterModal,
} from './AddTracksModal.styles'
import { Button } from '../../../../styles/GlobalComponents/Button'
import { ButtonLink } from '../../../../styles/GlobalComponents/NavLink'
import { ItemText } from './AddTracksModal.styles'

function AddTracksModal({ open, handleClose, reload, tracks }) {
  const { id } = useParams()
  const { _id } = useSelector((state) => state.auth.currentUser)
  const [selectedTracksToAdd, setSelectedTracksToAdd] = useState([])
  const [disableSaveBtn, setDisableSaveBtn] = useState(false)
  const [tracksToAdd, setTracksToAdd] = useState()

  useLayoutEffect(() => {
    getTracksToAdd()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    getTracksToAdd()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tracks])

  const getTracksToAdd = async () => {
    const headers = { _id: _id }
    const tracksIds = tracks.map((track) => track._id)
    const body = { tracks: tracksIds }
    const response = await api.getTracksToAdd(headers, body)
    setTracksToAdd(response.data.data)
  }

  const addTrackstoPlaylist = () => {
    setDisableSaveBtn(true)

    api
      .addTrackstoPlaylist({ _id: _id }, { tracks: selectedTracksToAdd }, id)
      .then((response) => {
        if (response.data.success) {
          setSelectedTracksToAdd([])
          reload()
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
            <SectionModal>
              <List>
                {tracksToAdd?.map((track, index) => {
                  const labelId = `checkbox-list-secondary-label-${track._id}`
                  return (
                    <ListItem
                      key={index}
                      secondaryAction={
                        <AddTrackCheck
                          trackId={track._id}
                          setSelectedTracksToAdd={setSelectedTracksToAdd}
                        />
                      }
                    >
                      <ListItemButton>
                        <ListItemAvatar>
                          <Avatar
                            alt={`Avatar n°${track + 1}`}
                            src={track.thumbnail}
                            variant="square"
                          />
                        </ListItemAvatar>
                        <ItemText>{track.name}</ItemText>
                        <ItemText id={labelId} primary={`Song ${track.name}`} />
                        <ItemText>{track.genre}</ItemText>
                      </ListItemButton>
                    </ListItem>
                  )
                })}
              </List>
            </SectionModal>
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

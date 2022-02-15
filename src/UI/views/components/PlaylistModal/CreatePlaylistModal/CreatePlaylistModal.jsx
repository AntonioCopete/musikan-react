import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import api from '../../../../../api'

import Spinner from '../../Spinner/Spinner'
import { Modal } from '@mui/material'
import {
  InputFile,
  ImageField,
  ModalContent,
  SectionModal,
  FormModal,
  SectionInputs,
  FooterModal,
} from './CreatePlaylistModal.styles'
import { Button } from '../../../../styles/GlobalComponents/Button'
import { ButtonLink } from '../../../../styles/GlobalComponents/NavLink'
import {
  CheckboxGroup,
  InputGroup,
  Textarea,
} from '../../../../styles/GlobalComponents/Input'
import { RiMusicFill } from 'react-icons/ri'

import noImage from '../../../../img/noImage.jpg'

function CreatePlaylistModal({ open, handleClose, reload }) {
  const playlistNameInputRef = useRef()
  const playlistImageInputRef = useRef()
  const playlistDescriptionInputRef = useRef()
  const playlistAccessInputRef = useRef()
  const [accessChecked, setAccessChecked] = useState(true)
  const [error, setError] = useState('')
  const [selectedPlaylistImg, setSelectedPlaylistImg] = useState()
  const [imageSrcPreview, setImageSrcPreview] = useState()
  const [disableSaveBtn, setDisableSaveBtn] = useState(false)

  const { _id } = useSelector((state) => state.auth.currentUser)

  const handlePic = (e) => {
    if (e.target.value === '') return
    onSelectFile(e)
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
    if (playlistNameInputRef.current.value === '')
      return setError("Name can't be blank")
    if (playlistDescriptionInputRef.current.value === '')
      return setError('You have to select a playlist description')
    if (playlistImageInputRef.current.value === '')
      return setError('You have to select a playlist image')

    setDisableSaveBtn(true)

    const selectedPlaylistName = playlistNameInputRef.current.value
    const selectedPlaylistDescription =
      playlistDescriptionInputRef.current.value
    const selectedPlaylistPicFile = playlistImageInputRef.current.files[0]
    const selectedPlaylistAccess = playlistAccessInputRef.current.checked

    const formData = new FormData()
    formData.append('name', selectedPlaylistName)
    formData.append('description', selectedPlaylistDescription)
    formData.append('thumbnail', selectedPlaylistPicFile)
    formData.append('publicAccessible', selectedPlaylistAccess)

    api.createPlaylist({ _id: _id }, formData).then((response) => {
      if (response.data.success) {
        reload()
        setDisableSaveBtn(false)
        handleClose()
      }
    })
  }

  useEffect(() => {
    if (!selectedPlaylistImg) {
      setImageSrcPreview(undefined) // ! PENDING REVIEW: WHEN CANCEL SELECT IMAGE -> RESTORE DEFAULT IMAGE
      return
    }

    const objectUrl = URL.createObjectURL(selectedPlaylistImg)
    setImageSrcPreview(objectUrl)

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedPlaylistImg])

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedPlaylistImg(undefined)
      return
    }

    setSelectedPlaylistImg(e.target.files[0])
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
          <h1>Create</h1>
          <FormModal onSubmit={handleSubmit}>
            <SectionModal>
              <label htmlFor="createPlaylistImageInput">
                <ImageField
                  src={selectedPlaylistImg ? imageSrcPreview : noImage}
                  alt="Your playlist's pic"
                />
              </label>
              <InputFile
                type="file"
                id="createPlaylistImageInput"
                onChange={handlePic}
                ref={playlistImageInputRef}
              />
              <SectionInputs>
                <InputGroup>
                  <RiMusicFill />
                  <input
                    type="text"
                    placeholder="Playlist name"
                    ref={playlistNameInputRef}
                  />
                </InputGroup>
                <Textarea
                  placeholder="Playlist description"
                  ref={playlistDescriptionInputRef}
                />
                <CheckboxGroup>
                  <input
                    type="checkbox"
                    id="accessCheckbox"
                    checked={accessChecked}
                    ref={playlistAccessInputRef}
                    onChange={() => {
                      setAccessChecked(!accessChecked)
                    }}
                  />
                  <label htmlFor="accessCheckbox">
                    This playlist is public
                  </label>
                </CheckboxGroup>
                {error && <p>{error}</p>}
              </SectionInputs>
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

export default CreatePlaylistModal

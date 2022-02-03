import { useEffect, useRef, useState } from 'react'

import api from '../../../../../api'
import * as auth from '../../../../../services/auth/auth'

import { renderTracks } from '../../../../../redux/track/actions'

import { Modal } from '@mui/material'
import { Container } from './UploadSongModal.styles'
import { Button } from '../../../../styles/GlobalComponents/Button'
import { ButtonLink } from '../../../../styles/GlobalComponents/NavLink'

import { HiddenInput } from './UploadSongModal.styles'

import defaultPic from './default-album.jpg'
import { useDispatch } from 'react-redux'

function UploadSongModal({ open, handleClose }) {
  const dispatch = useDispatch()
  const songNameInputRef = useRef()
  const songImageInputRef = useRef()
  const songFileInputRef = useRef()
  const genreInputRef = useRef()
  const defaultGenreRef = useRef()
  const [genres, setGenres] = useState([])
  const [error, setError] = useState('')
  const [selectedSongFile, setSelectedSongFile] = useState()
  const [selectedSongImg, setSelectedSongImg] = useState()
  const [imageSrcPreview, setImageSrcPreview] = useState()
  const [disableSaveBtn, setDisableSaveBtn] = useState(false)

  useEffect(() => {
    getGenres()
  }, [])

  const getGenres = async () => {
    const response = await api.getGenres()
    setGenres(response.data)
  }

  const handlePic = (e) => {
    if (e.target.value === '') return
    onSelectFile(e)
  }

  const handleSelectedSongFile = (e) => {
    const fileName = e.target.files[0].name.split('.')[0]
    if (songNameInputRef.current.value === '') {
      songNameInputRef.current.value = fileName
    } // ! REFACTOR -> USEREF TO USESTATE

    if (!e.target.files[0]) {
      setSelectedSongFile('')
    } else if (e.target.files[0].name !== '') {
      setSelectedSongFile(e.target.files[0].name)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    getUserTokenAndRequestUpload()
  }

  const handleCancel = (e) => {
    e.preventDefault()
    handleClose()
  }

  const getUserTokenAndRequestUpload = async () => {
    const token = await auth.getCurrentUserToken()
    uploadRequest(token)
  }

  const uploadRequest = (token) => {
    if (genreInputRef.current.value === 'Select a genre')
      return setError('You have to select a genre')
    if (songNameInputRef.current.value === '')
      return setError("Name can't be blank")
    if (songImageInputRef.current.value === '')
      return setError('You have to select a song image')
    if (songFileInputRef.current.value === '')
      return setError('You have to select a song file')

    setDisableSaveBtn(true)

    const selectedSongName = songNameInputRef.current.value
    const selectedGenre = genreInputRef.current.value
    const selectedSongPicFile = songImageInputRef.current.files[0]
    const selectedSongFile = songFileInputRef.current.files[0]

    const formData = new FormData()
    formData.append('name', selectedSongName)
    formData.append('genre', selectedGenre)
    formData.append('thumbnail', selectedSongPicFile)
    formData.append('track', selectedSongFile)

    api
      .uploadTrack({ Authorization: `Bearer ${token}` }, formData)
      .then((response) => {
        if (response.data.success) {
          setDisableSaveBtn(false)
          // ! PENDING CONFIRM TO USER EVERYTHING WAS OK
          dispatch(renderTracks(response.data.data))
          handleClose()
        }
      })
  }

  useEffect(() => {
    if (!selectedSongImg) {
      setImageSrcPreview(undefined) // ! PENDING REVIEW: WHEN CANCEL SELECT IMAGE -> RESTORE DEFAULT IMAGE
      return
    }

    const objectUrl = URL.createObjectURL(selectedSongImg)
    setImageSrcPreview(objectUrl)

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedSongImg])

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedSongImg(undefined)
      return
    }

    setSelectedSongImg(e.target.files[0])
  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container>
          <h1 style={{ display: 'inline-block', float: 'left' }}>Upload</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="uploadSongImageInput">
              <img
                src={selectedSongImg ? imageSrcPreview : defaultPic}
                style={{
                  maxWidth: '25vh',
                  display: 'inline-block',
                  float: 'left',
                }}
                alt="Your song's pic"
              />
            </label>
            <HiddenInput
              type="file"
              id="uploadSongImageInput"
              onChange={handlePic}
              ref={songImageInputRef}
            />
            <label
              htmlFor="uploadSongFileInput"
              style={{ display: 'block', float: 'left' }}
            >
              Select your file
            </label>
            {selectedSongFile && <p>{selectedSongFile}</p>}
            <HiddenInput
              type="file"
              id="uploadSongFileInput"
              onChange={handleSelectedSongFile}
              ref={songFileInputRef}
            />
            <input
              type="text"
              placeholder="Name"
              ref={songNameInputRef}
              style={{ maxWidth: '25vh', display: 'block', float: 'left' }}
            />
            <select
              ref={genreInputRef}
              onChange={() => {
                defaultGenreRef.current.disabled = true
              }}
            >
              <option
                ref={defaultGenreRef}
                style={{ maxWidth: '25vh', display: 'block', float: 'left' }}
              >
                Select a genre
              </option>
              {genres &&
                genres.map((genre) => {
                  return (
                    <option key={genre} value={genre}>
                      {genre}
                    </option>
                  )
                })}
            </select>
            {error && <p>{error}</p>}
            <Button disabled={disableSaveBtn} primary type="submit">
              Save
            </Button>
            <ButtonLink type="text" onClick={handleCancel}>
              Cancel
            </ButtonLink>
          </form>
        </Container>
      </Modal>
    </>
  )
}

export default UploadSongModal

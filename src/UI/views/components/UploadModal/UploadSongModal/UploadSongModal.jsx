import { useEffect, useRef, useState } from 'react'

import api from '../../../../../api'

import Spinner from '../../Spinner/Spinner'
import { Modal } from '@mui/material'
import {
  InputFile,
  ImageField,
  ModalContent,
  SectionModal,
  LabelFile,
  FormModal,
  SectionInputs,
  FooterModal,
} from './UploadSongModal.styles'
import { Button } from '../../../../styles/GlobalComponents/Button'
import { ButtonLink } from '../../../../styles/GlobalComponents/NavLink'
import { InputGroup } from '../../../../styles/GlobalComponents/Input'
import { RiMusicFill } from 'react-icons/ri'
import { MdOutlineLibraryMusic } from 'react-icons/md'

import noImage from '../../../../img/noImage.jpg'
import { useSelector } from 'react-redux'

function UploadSongModal({ open, handleClose, reload }) {
  const songNameInputRef = useRef()
  const songImageInputRef = useRef()
  const songFileInputRef = useRef()
  const genreInputRef = useRef()
  const defaultGenreRef = useRef()
  const [genres, setGenres] = useState([])
  const [error, setError] = useState('')
  const [, setSelectedSongFile] = useState()
  const [selectedSongImg, setSelectedSongImg] = useState()
  const [imageSrcPreview, setImageSrcPreview] = useState()
  const [disableSaveBtn, setDisableSaveBtn] = useState(false)

  const { _id } = useSelector((state) => state.auth.currentUser)

  useEffect(() => {
    getGenres()
  }, [])

  const getGenres = async () => {
    const response = await api.getGenres()
    setGenres(response.data.data)
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
    uploadRequest()
  }

  const uploadRequest = () => {
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

    api.uploadTrack({ _id: _id }, formData).then((response) => {
      if (response.data.success) {
        reload()
        setDisableSaveBtn(false)
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
        <ModalContent>
          {disableSaveBtn && <Spinner />}
          {/* <Spinner /> */}
          <h1>Upload</h1>
          <FormModal onSubmit={handleSubmit}>
            <LabelFile htmlFor="uploadSongFileInput">Select track</LabelFile>
            <InputFile
              type="file"
              id="uploadSongFileInput"
              onChange={handleSelectedSongFile}
              ref={songFileInputRef}
            />
            {/* {selectedSongFile && <p>File {selectedSongFile}</p>} */}
            <SectionModal>
              {/* image */}
              <label htmlFor="uploadSongImageInput">
                <ImageField
                  src={selectedSongImg ? imageSrcPreview : noImage}
                  alt="Your song's pic"
                />
              </label>
              <InputFile
                type="file"
                id="uploadSongImageInput"
                onChange={handlePic}
                ref={songImageInputRef}
              />
              <SectionInputs>
                <InputGroup>
                  <RiMusicFill />
                  <input
                    type="text"
                    placeholder="Track name"
                    ref={songNameInputRef}
                  />
                </InputGroup>
                <InputGroup>
                  <MdOutlineLibraryMusic />
                  <select
                    ref={genreInputRef}
                    onChange={() => {
                      defaultGenreRef.current.disabled = true
                    }}
                  >
                    <option ref={defaultGenreRef}>Select genre</option>
                    {genres &&
                      genres.map((genre) => {
                        return (
                          <option key={genre._id} value={genre._id}>
                            {genre.name}
                          </option>
                        )
                      })}
                  </select>
                </InputGroup>
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

export default UploadSongModal

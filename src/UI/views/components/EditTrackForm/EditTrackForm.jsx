import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

import api from '../../../../api'
import * as auth from '../../../../services/auth/auth'

import { Button } from '../../../styles/GlobalComponents/Button'
import { ButtonLink } from '../../../styles/GlobalComponents/NavLink'

import { HiddenInput } from './EditTrackForm.styles'

function EditTrackForm() {
  const { trackId } = useParams()
  const navigate = useNavigate()
  const trackNameInputRef = useRef()
  const trackImageInputRef = useRef()
  const genreInputRef = useRef()
  const [userToken, setUserToken] = useState()
  const [trackInfo, setTrackInfo] = useState()
  const [genres, setGenres] = useState([])
  const [error, setError] = useState('')
  const [selectedTrackImg, setSelectedTrackImg] = useState()
  const [imageSrcPreview, setImageSrcPreview] = useState()
  const [disableSaveBtn, setDisableSaveBtn] = useState(false)
  const [success, setSuccess] = useState('')

  useEffect(() => {
    getTokenAndRequest()
    getGenres()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getTokenAndRequest = async () => {
    const token = await auth.getCurrentUserToken()
    setUserToken(token)
    getTrackInfo(token)
  }

  const getGenres = async () => {
    const response = await api.getGenres()
    setGenres(response.data)
  }

  const getTrackInfo = async (token) => {
    const headers = { Authorization: `Bearer ${token}` }
    const response = await api.getTrackInfo(headers, trackId)
    setTrackInfo(response.data.data)
  }

  const handlePic = (e) => {
    if (e.target.value === '') return
    onSelectFile(e)
  }

  const handleChangeGenre = (e) => {
    setTrackInfo((prevState) => ({
      ...prevState,
      genre: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    editRequest()
  }

  const handleCancel = (e) => {
    e.preventDefault()
    navigate(-1)
  }

  const editRequest = () => {
    setSuccess('')

    if (genreInputRef.current.value === '')
      return setError('You have to select a genre')
    if (trackNameInputRef.current.value === '')
      return setError("Name can't be blank")

    setDisableSaveBtn(true)

    const selectedTrackName = trackNameInputRef.current.value
    const selectedGenre = genreInputRef.current.value
    let selectedTrackPicFile = trackImageInputRef.current.files[0]
    if (trackImageInputRef.current.value === '') {
      selectedTrackPicFile = trackInfo.thumbnail
    }

    console.log(selectedTrackPicFile)

    const formData = new FormData()
    formData.append('name', selectedTrackName)
    formData.append('genre', selectedGenre)
    formData.append('thumbnail', selectedTrackPicFile)

    api
      .updateTrackInfo(
        { Authorization: `Bearer ${userToken}` },
        formData,
        trackId
      )
      .then((response) => {
        if (response.data?.success) {
          setDisableSaveBtn(false)
          setSuccess(response.data.success)
        } else {
          setError('Something went wrong')
        }
      })
  }

  useEffect(() => {
    if (!selectedTrackImg) {
      setImageSrcPreview(undefined) // ! PENDING REVIEW: WHEN CANCEL SELECT IMAGE -> RESTORE DEFAULT IMAGE??
      return
    }

    const objectUrl = URL.createObjectURL(selectedTrackImg)
    setImageSrcPreview(objectUrl)

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedTrackImg])

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedTrackImg(undefined)
      return
    }

    setSelectedTrackImg(e.target.files[0])
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="uploadTrackImageInput">
        <img
          src={selectedTrackImg ? imageSrcPreview : trackInfo?.thumbnail}
          alt="Your track's pic"
        />
      </label>
      <HiddenInput
        type="file"
        id="uploadTrackImageInput"
        onChange={handlePic}
        ref={trackImageInputRef}
      />
      <input
        type="text"
        placeholder="Name"
        ref={trackNameInputRef}
        defaultValue={trackInfo?.name}
      />
      <select
        ref={genreInputRef}
        value={trackInfo?.genre}
        onChange={handleChangeGenre}
      >
        {genres &&
          genres.map((genre) => {
            return <option key={genre}>{genre}</option>
          })}
      </select>
      {success && <p>{success}</p>}
      {error && <p>{error}</p>}
      <Button disabled={disableSaveBtn} primary type="submit">
        Save
      </Button>
      <ButtonLink type="text" onClick={handleCancel}>
        Cancel
      </ButtonLink>
    </form>
  )
}

export default EditTrackForm

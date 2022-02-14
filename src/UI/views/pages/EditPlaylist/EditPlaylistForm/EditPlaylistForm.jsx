import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

import api from '../../../../../api'

import { Button } from '../../../../styles/GlobalComponents/Button'
import { ButtonLink } from '../../../../styles/GlobalComponents/NavLink'
import {
  CheckboxGroup,
  InputGroup,
} from '../../../../styles/GlobalComponents/Input'
import { FormEdit, HiddenInput } from './EditPlaylistForm.styles'
import { FaMusic } from 'react-icons/fa'

import { useSelector } from 'react-redux'

function EditPlaylistForm() {
  const navigate = useNavigate()
  const playlistImageInputRef = useRef()
  const playlistNameInputRef = useRef()
  const playlistDescriptionInputRef = useRef()
  const playlistAccessInputRef = useRef()
  const [playlistInfo, setPlaylistInfo] = useState()
  const [accessChecked, setAccessChecked] = useState(false)
  const [error, setError] = useState('')
  const [selectedPlaylistImg, setSelectedPlaylistImg] = useState()
  const [imageSrcPreview, setImageSrcPreview] = useState()
  const [disableSaveBtn, setDisableSaveBtn] = useState(false)
  const [success, setSuccess] = useState('')

  const { playlistId } = useParams()
  const { _id } = useSelector((state) => state.auth.currentUser)

  useLayoutEffect(() => {
    getPlaylist()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getPlaylist = async () => {
    const headers = { _id: _id }
    const response = await api.getPlaylist(headers, playlistId)
    if (!response.data.data.owned) navigate(-1) // IF USER IS NOT OWNER, RETURN BACK
    setPlaylistInfo(response.data.data)
    setAccessChecked(response.data.data.publicAccessible)
  }

  const handlePic = (e) => {
    if (e.target.value === '') return
    onSelectFile(e)
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

    if (playlistNameInputRef.current.value === '')
      return setError("Name can't be blank")
    if (playlistDescriptionInputRef.current.value === '')
      return setError("Description can't be blank")

    setDisableSaveBtn(true)

    const selectedPlaylistName = playlistNameInputRef.current.value
    const selectedPlaylistDescription =
      playlistDescriptionInputRef.current.value
    const selectedPlaylistAccess = playlistAccessInputRef.current.checked

    let selectedPlaylistPicFile = playlistImageInputRef.current.files[0]
    if (playlistImageInputRef.current.value === '') {
      selectedPlaylistPicFile = playlistInfo.thumbnail
    }

    const formData = new FormData()
    formData.append('name', selectedPlaylistName)
    formData.append('description', selectedPlaylistDescription)
    formData.append('publicAccessible', selectedPlaylistAccess)
    formData.append('thumbnail', selectedPlaylistPicFile)

    api
      .updatePlaylistInfo({ _id: _id }, formData, playlistId)
      .then((response) => {
        if (response.data?.success) {
          setDisableSaveBtn(false)
          setSuccess(response.data.success)
          navigate(-1)
        } else {
          setError('Something went wrong')
        }
      })
  }

  useEffect(() => {
    if (!selectedPlaylistImg) {
      setImageSrcPreview(undefined) // ! PENDING REVIEW: WHEN CANCEL SELECT IMAGE -> RESTORE DEFAULT IMAGE??
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
    <FormEdit onSubmit={handleSubmit}>
      <label htmlFor="uploadPlaylistImageInput">
        <img
          src={selectedPlaylistImg ? imageSrcPreview : playlistInfo?.thumbnail}
          alt="Your playlist's pic"
        />
      </label>
      <HiddenInput
        type="file"
        id="uploadPlaylistImageInput"
        onChange={handlePic}
        ref={playlistImageInputRef}
      />
      <InputGroup>
        <FaMusic />
        <input
          type="text"
          placeholder="Playlist name"
          ref={playlistNameInputRef}
          defaultValue={playlistInfo?.name}
        />
      </InputGroup>
      <InputGroup>
        <FaMusic />
        <textarea
          placeholder="Playlist description"
          ref={playlistDescriptionInputRef}
          defaultValue={playlistInfo?.description}
        />
      </InputGroup>
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
        <label htmlFor="accessCheckbox">This playlist is public</label>
      </CheckboxGroup>
      {success && <p>{success}</p>}
      {error && <p>{error}</p>}
      <Button disabled={disableSaveBtn} primary type="submit">
        Save
      </Button>
      <ButtonLink type="text" onClick={handleCancel}>
        Cancel
      </ButtonLink>
    </FormEdit>
  )
}

export default EditPlaylistForm

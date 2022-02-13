import { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Avatar } from '@mui/material'

import { updateAvatar } from '../../../../../../redux/auth/actions'

import { LabelContainer, Overlay, AvatarInput } from './ImageInput.styles'

function ImageInput() {
  const { profilePicture } = useSelector((state) => state.auth.currentUser)
  const [isLoading, setIsLoading] = useState(false)
  const fileInputRef = useRef()
  const dispatch = useDispatch()
  const { _id } = useSelector((state) => state.auth.currentUser)

  const handleChange = (event) => {
    if (event.target.value === '') return

    setIsLoading(true)

    const selectedAvatarImage = event.target.files[0]

    const formData = new FormData()
    formData.append(
      'profilePicture',
      selectedAvatarImage,
      selectedAvatarImage.name
    )

    dispatch(updateAvatar(formData, _id))

    fileInputRef.current.value = ''

    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  return (
    <>
      <LabelContainer htmlFor="avatarImageInput">
        <Avatar
          src={profilePicture}
          sx={{ width: 125, height: 125, boxShadow: 5 }}
        />
        <Overlay>
          <span>Edit</span>
        </Overlay>
      </LabelContainer>
      <AvatarInput
        id="avatarImageInput"
        type="file"
        name="profilePicture"
        ref={fileInputRef}
        disabled={isLoading}
        onChange={handleChange}
      />
    </>
  )
}

export default ImageInput

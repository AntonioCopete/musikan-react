import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux";

import { updateAvatar } from "../../../../../redux/auth/actions"

import { Container, Overlay, AvatarInput, AvatarImage } from "./ImageInput.styles";

function ImageInput() {
  const { profilePicture } = useSelector(state => state.auth.currentUser)
  const [isLoading, setIsLoading] = useState(false)
  const fileInputRef = useRef();
  const dispatch = useDispatch()

  const handleChange = (event) => {
    if (event.target.value === "") return
    
    setIsLoading(true)

    const selectedAvatarImage = event.target.files[0]

    const formData = new FormData()
    formData.append("profilePicture", selectedAvatarImage, selectedAvatarImage.name)

    dispatch(updateAvatar(formData))

    fileInputRef.current.value = ''

    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
};

  return (
    <>
      <label htmlFor="avatarImageInput">
        <Container>
          <AvatarImage src={profilePicture} sx={{ width: 125, height: 125, boxShadow: 5 }} />
          <Overlay>
            <span>Edit</span>
          </Overlay>
        </Container>
      </label>
      <AvatarInput id="avatarImageInput" type="file" name="profilePicture" ref={fileInputRef} disabled={isLoading} onChange={handleChange} />
    </>
  )
}

export default ImageInput

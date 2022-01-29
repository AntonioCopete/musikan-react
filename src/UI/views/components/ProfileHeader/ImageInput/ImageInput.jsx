import { useSelector } from 'react-redux'
import { AvatarInput, AvatarImage } from './ImageInput.styles'

function ImageInput() {
  const { avatarImage } = useSelector((state) => state.auth.currentUser)

  return (
    <>
      <label htmlFor="avatarImageInput">
        <AvatarImage
          src={avatarImage}
          sx={{ width: 125, height: 125, boxShadow: 5 }}
        />
      </label>
      <AvatarInput id="avatarImageInput" type="file" />
    </>
  )
}

export default ImageInput

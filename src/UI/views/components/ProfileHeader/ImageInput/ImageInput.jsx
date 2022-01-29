import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux";
import { AvatarLabel, AvatarInput, AvatarImage } from "./ImageInput.styles";
import { updateProfile } from "../../../../../redux/auth/actions"

function ImageInput() {
  const dispatch = useDispatch()
  const { profilePicture, email } = useSelector(state => state.auth.currentUser)
  const fileInputRef = useRef();

  const handleChange = (event) => {
    if (event.target.value === "") return
    
    const selectedAvatarImage = event.target.files[0]

    const formData = new FormData()
    formData.append("email", email)
    formData.append("profilePicture", selectedAvatarImage, selectedAvatarImage.name)

    dispatch(updateProfile(formData))

    fileInputRef.current.value = ''
};

  return (
    <>
      <AvatarLabel htmlFor="avatarImageInput">
        <AvatarImage src={profilePicture} sx={{ width: 125, height: 125, boxShadow: 5 }} />
      </AvatarLabel>
      <AvatarInput id="avatarImageInput" type="file" ref={fileInputRef} onChange={handleChange} />
    </>
  );
}

export default ImageInput;

import { useSelector } from "react-redux";
import { AvatarLabel, AvatarInput, AvatarImage } from "./ImageInput.styles";

function ImageInput() {
  const { avatarImage } = useSelector(state => state.auth.currentUser)

  return (
    <>
      <AvatarLabel htmlFor="avatarImageInput">
        <AvatarImage src={avatarImage} sx={{ width: 125, height: 125, boxShadow: 5 }} />
      </AvatarLabel>
      <AvatarInput id="avatarImageInput" type="file" />
    </>
  );
}

export default ImageInput;

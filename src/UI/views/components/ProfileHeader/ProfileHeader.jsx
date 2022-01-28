import { UserInfoContainer, UserName, UserEmail, Breadcrumb } from "./ProfileHeader.styles";
import { useSelector } from "react-redux";

import ImageInput from "./ImageInput/ImageInput";

import Box from "@mui/material/Box";

function ProfileHeader() {
  const { email, userName } = useSelector(state => state.auth.currentUser)

  return (
    <>
      <Breadcrumb>Profile</Breadcrumb>
      <UserInfoContainer>
        <ImageInput />
        <Box>
          <UserName>{userName}</UserName>
          <UserEmail>{email}</UserEmail>
        </Box>
      </UserInfoContainer>
    </>
  );
}

export default ProfileHeader;

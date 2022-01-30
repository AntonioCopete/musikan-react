import { Avatar } from '@mui/material'
import { AvatarContainer } from './UserAvatar.styles'

import { useSelector } from "react-redux"

function UserAvatar({ showUserMenu, setShowUserMenu }) {
  const { profilePicture } = useSelector(state => state.auth.currentUser)
  return (
    <AvatarContainer>
      <Avatar
        src={profilePicture}
        alt="Firstname Lastname"
        sx={{ width: 56, height: 56 }}
        onClick={() => {
          setShowUserMenu(!showUserMenu)
        }}
      />
    </AvatarContainer>
  )
}

export default UserAvatar

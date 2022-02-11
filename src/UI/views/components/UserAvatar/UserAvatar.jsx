import { Avatar } from '@mui/material'
import { AvatarContainer } from './UserAvatar.styles'

import { useSelector } from 'react-redux'

function UserAvatar({ showUserMenu, setShowUserMenu }) {
  const { userName, profilePicture } = useSelector(
    (state) => state.auth.currentUser
  )
  return (
    <AvatarContainer>
      <Avatar
        src={profilePicture}
        alt={`${userName}'s profile pic`}
        sx={{ width: 56, height: 56 }}
        onClick={() => {
          setShowUserMenu(!showUserMenu)
        }}
      />
    </AvatarContainer>
  )
}

export default UserAvatar

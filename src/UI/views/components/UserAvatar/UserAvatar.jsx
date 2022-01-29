import { Avatar } from '@mui/material'
import { AvatarContainer } from './UserAvatar.styles'
import defaultPic from '../../../img/default-pic.jpg'

function UserAvatar({ showUserMenu, setShowUserMenu }) {
  return (
    <AvatarContainer>
      <Avatar
        src={defaultPic}
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

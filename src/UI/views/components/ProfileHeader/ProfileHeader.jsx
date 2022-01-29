import { useSelector } from 'react-redux'
import Panel from '../../components/Panel/Panel'
import ImageInput from './ImageInput/ImageInput'
import {
  ProfileInfo,
  ProfileWrapper,
  ProfileTitle,
} from './ProfileHeader.styles'

function ProfileHeader() {
  const { email, userName } = useSelector((state) => state.auth.currentUser)

  return (
    <Panel>
      <ProfileTitle>Profile</ProfileTitle>
      <ProfileWrapper>
        <ImageInput />
        <ProfileInfo>
          <h1>{userName}</h1>
          <p>{email}</p>
        </ProfileInfo>
      </ProfileWrapper>
    </Panel>
  )
}

export default ProfileHeader

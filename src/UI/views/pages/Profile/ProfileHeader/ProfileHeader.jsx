import { useSelector } from 'react-redux'
import PanelHero from '../../../components/PanelHero/PanelHero'
import ImageInput from './ImageInput/ImageInput'
import {
  ProfileInfo,
  ProfileWrapper,
  ProfileTitle,
} from './ProfileHeader.styles'

function ProfileHeader() {
  const { email, userName } = useSelector((state) => state.auth.currentUser)

  return (
    <PanelHero>
      <ProfileTitle>Profile</ProfileTitle>
      <ProfileWrapper>
        <ImageInput />
        <ProfileInfo>
          <h1>{userName}</h1>
          <p>{email}</p>
        </ProfileInfo>
      </ProfileWrapper>
    </PanelHero>
  )
}

export default ProfileHeader

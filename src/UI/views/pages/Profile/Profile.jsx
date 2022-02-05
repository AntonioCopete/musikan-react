import { Header, Main } from '../../layout/Layout.styles'
import ProfileHeader from './ProfileHeader/ProfileHeader'
import ProfileForm from './ProfileForm/ProfileForm'

function Profile() {
  return (
    <>
      <Header>
        <ProfileHeader />
      </Header>
      <Main>
        <ProfileForm />
      </Main>
    </>
  )
}

export default Profile

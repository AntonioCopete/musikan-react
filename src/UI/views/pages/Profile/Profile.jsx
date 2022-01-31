import Layout from '../../layout/Layout'
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader'
import ProfileForm from '../../components/ProfileForm/ProfileForm'

function Profile() {
  return <Layout hero={<ProfileHeader />} main={<ProfileForm />} />
}

export default Profile

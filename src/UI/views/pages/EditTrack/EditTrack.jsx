import Layout from '../../layout/Layout'
import EditTrackHeader from '../../components/EditTrackHeader/EditTrackHeader'
import EditTrackForm from '../../components/EditTrackForm/EditTrackForm'

function EditTrack() {
  return <Layout hero={<EditTrackHeader />} main={<EditTrackForm />} />
}

export default EditTrack

import Layout from '../../layout/Layout'
import Hero from '../../components/Hero/Hero'
import EditTrackForm from '../../components/EditTrackForm/EditTrackForm'

function EditTrack() {
  return (
    <Layout hero={<Hero title={'Edit Track'} />} main={<EditTrackForm />} />
  )
}

export default EditTrack

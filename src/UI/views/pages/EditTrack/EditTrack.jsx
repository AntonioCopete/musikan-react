import { Header, Main } from '../../layout/Layout.styles'
import Hero from '../../components/Hero/Hero'
import EditTrackForm from './EditTrackForm/EditTrackForm'

function EditTrack() {
  return (
    <>
      <Header>
        <Hero title={'Edit Track'} />
      </Header>
      <Main>
        <EditTrackForm />
      </Main>
    </>
  )
}

export default EditTrack

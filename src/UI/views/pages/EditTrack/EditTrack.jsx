import { Header, Main } from '../../layout/Layout.styles'
import PanelHero from '../../components/PanelHero/PanelHero'
import EditTrackForm from './EditTrackForm/EditTrackForm'

function EditTrack() {
  return (
    <>
      <Header>
        <PanelHero>
          <h1>Edit Track</h1>
        </PanelHero>
      </Header>
      <Main>
        <EditTrackForm />
      </Main>
    </>
  )
}

export default EditTrack

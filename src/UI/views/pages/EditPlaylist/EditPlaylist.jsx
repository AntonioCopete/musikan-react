import { Header, Main } from '../../layout/Layout.styles'
import PanelHero from '../../components/PanelHero/PanelHero'
import EditPlaylistForm from './EditPlaylistForm/EditPlaylistForm'

function EditPlaylist() {
  return (
    <>
      <Header>
        <PanelHero>
          <h1>Edit Playlist</h1>
        </PanelHero>
      </Header>
      <Main>
        <EditPlaylistForm />
      </Main>
    </>
  )
}

export default EditPlaylist

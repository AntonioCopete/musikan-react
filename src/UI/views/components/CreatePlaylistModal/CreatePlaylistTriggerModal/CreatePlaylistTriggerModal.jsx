import { SquaredButton } from '../../../../styles/GlobalComponents/Button'
import { BsPlusLg } from 'react-icons/bs'

function CreatePlaylistTriggerModal({ handleOpen }) {
  return (
    <SquaredButton onClick={handleOpen}>
      <BsPlusLg />
    </SquaredButton>
  )
}

export default CreatePlaylistTriggerModal

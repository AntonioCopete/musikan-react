import { SquaredButton } from '../../../../styles/GlobalComponents/Button'
import { BsPlusLg } from 'react-icons/bs'

function AddTracksTriggerModal({ handleOpen }) {
  return (
    <SquaredButton small onClick={handleOpen}>
      <BsPlusLg />
    </SquaredButton>
  )
}

export default AddTracksTriggerModal

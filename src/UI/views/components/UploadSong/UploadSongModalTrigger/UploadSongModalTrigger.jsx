import { Button } from '../../../../styles/GlobalComponents/Button'

function UploadSongModalTrigger({ handleOpen }) {
  return (
    <>
      <Button primary onClick={handleOpen}>Upload</Button>
    </>
  );
}

export default UploadSongModalTrigger;

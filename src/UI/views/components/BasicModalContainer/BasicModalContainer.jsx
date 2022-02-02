import { useState } from "react";
import UploadSongModal from "../UploadSongModal/UploadSongModal";

import BasicModal from "./BasicModal/BasicModal";
import TriggerModal from "./TriggerModal/TriggerModal";

function BasicModalContainer({ btnText, type }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <TriggerModal type={type} btnText={btnText} handleOpen={handleOpen} />
      <BasicModal open={open} handleClose={handleClose} >
        <UploadSongModal />
      </BasicModal>
    </>
  );
}

export default BasicModalContainer;

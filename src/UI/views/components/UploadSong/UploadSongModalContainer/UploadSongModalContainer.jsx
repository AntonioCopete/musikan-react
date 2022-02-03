import { useState } from "react";

import UploadSongModalTrigger from "../UploadSongModalTrigger/UploadSongModalTrigger";
import UploadSongModal from "../UploadSongModal/UploadSongModal";

function UploadSongModalContainer() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <UploadSongModalTrigger
        handleOpen={handleOpen}
      />
      <UploadSongModal
        open={open}
        handleClose={handleClose}
      />
    </>
  );
}

export default UploadSongModalContainer;

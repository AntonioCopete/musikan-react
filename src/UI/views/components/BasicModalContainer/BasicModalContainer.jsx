import BasicModal from "./BasicModal/BasicModal";
import TriggerModal from "./TriggerModal/TriggerModal";

function BasicModalContainer({ content, btnText, type, open, setOpen, handleOpen, handleClose }) {
  return (
    <>
      <TriggerModal
        type={type}
        btnText={btnText}
        handleOpen={handleOpen}
      />
      <BasicModal
        content={content}
        open={open}
        handleClose={handleClose}
      />
    </>
  );
}

export default BasicModalContainer;

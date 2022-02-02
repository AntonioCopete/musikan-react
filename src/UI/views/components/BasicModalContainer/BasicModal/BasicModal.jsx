import Modal from '@mui/material/Modal';

import { Container } from "./BasicModal.styles"

export default function BasicModal({ content, handleClose, open }) {
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container>
          {content}
        </Container>
      </Modal>
    </>
  );
}
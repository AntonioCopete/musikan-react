import Modal from '@mui/material/Modal';

import { Container } from "./BasicModal.styles"

export default function BasicModal({ children, handleClose, open }) {
  return (
    <>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container>
          {children}
        </Container>
      </Modal>
    </>
  );
}
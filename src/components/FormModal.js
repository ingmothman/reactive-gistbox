import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import ItemForm from './form/ItemForm';

export default ({ onHide, show }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      bsSize="large"
      aria-labelledby="contained-modal-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-lg">New Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ItemForm onSubmit={(e) => {
          console.log(e);
        }}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

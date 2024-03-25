import React from 'react'
import Modal from 'react-bootstrap/Modal'

function BootstrapModal({ isOpen, onClose, children }) {
  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  )
}

export { BootstrapModal }

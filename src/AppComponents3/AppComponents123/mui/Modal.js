import React from 'react'
import Modal from '@mui/material/Modal'

function MaterialUIModal({ isOpen, onClose, children }) {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className="modal">{children}</div>
    </Modal>
  )
}

export { MaterialUIModal }

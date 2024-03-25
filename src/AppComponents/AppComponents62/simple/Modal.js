import React from 'react'

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close-btn" onClick={onClose}>
          &times;
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  )
}

export { Modal }

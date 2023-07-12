import React from 'react'
import ReactDOM from 'react-dom'
import styles from './Modal.module.css'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import ModalOverlay from '../ModalOverlay/ModalOverlay'

const Modal = ({ onClose, children }) => {
  return ReactDOM.createPortal(
    <>
      <ModalOverlay onClose={onClose} />
      <div className={`${styles.modal}`}>
        <div className={`${styles.close}`}>
          <CloseIcon type="primary" onClick={onClose} />
        </div>

        <div className={`${styles.content}`}>{children}</div>
      </div>
    </>,
    document.getElementById('modal-root')
  )
}

export default Modal

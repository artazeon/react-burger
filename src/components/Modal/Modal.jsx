import React from 'react'
import styles from './Modal.module.css'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const Modal = ({ onClose, children }) => {
  return (
    <div className={`${styles.modal}`}>
      <div className={`${styles.close}`}>
        <CloseIcon type="primary" onClick={onClose} />
      </div>

      <div className={`${styles.content}`}>{children}</div>
    </div>
  )
}

export default Modal

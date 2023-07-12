import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'

import ModalOverlay from '../ModalOverlay/ModalOverlay'

import styles from './Modal.module.css'

const Modal = ({ onClose, children, title }) => {
  return ReactDOM.createPortal(
    <>
      <ModalOverlay onClose={onClose} />
      <div className={`${styles.modal}`}>
        <div className={`${styles.headerModal}`}>
          {title && (
            <p
              className={`mr-10 ml-10 mt-10 text text_type_main-large ${styles.title}`}
            >
              {title}
            </p>
          )}

          <div className={`${styles.close}`}>
            <CloseIcon type="primary" onClick={onClose} />
          </div>
        </div>

        <div className={`${styles.content}`}>{children}</div>
      </div>
    </>,
    document.getElementById('modal-root')
  )
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
}

export default Modal

import React, { useEffect } from 'react'

import PropTypes from 'prop-types'

import styles from './ModalOverlay.module.css'

const ModalOverlay = ({ onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 27) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  })

  return <div className={`${styles.overlay}`} onClick={onClose}></div>
}

ModalOverlay.propTypes = {
  onClose: PropTypes.func.isRequired,
}

export default ModalOverlay

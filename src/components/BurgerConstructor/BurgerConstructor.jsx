import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import Modal from '../Modal/Modal'
import ModalOverlay from '../ModalOverlay/ModalOverlay'
import stylesModal from '../Modal/Modal.module.css'

import styles from './BurgerConstructor.module.css'
import dragDropIcon from '../../images/drag-and-drop-icon.png'

import checkMark from '../../images/checkMark/checkMark.svg'
import checkMarkBg1 from '../../images/checkMark/checkMarkBg1.svg'
import checkMarkBg2 from '../../images/checkMark/checkMarkBg2.svg'
import checkMarkBg3 from '../../images/checkMark/checkMarkBg3.svg'

import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'
import checkType from '../../utils/checkType.jsx'

const BurgerConstructor = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      <ConstructorElement
        text={data[0].name}
        price={data[0].price}
        thumbnail={data[0].image}
        type="top"
        isLocked={true}
        extraClass={'mt-25 mb-4 ml-8'}
      />

      <div className={`${styles.scroll}`}>
        {data.length ? (
          data.map((el) => {
            return (
              <div className={`mb-4 ${styles.compound}`} key={el._id}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text={el.name}
                  price={el.price}
                  thumbnail={el.image}
                  extraClass={'ml-2'}
                />
              </div>
            )
          })
        ) : (
          <img
            src={checkMark}
            alt="drag-and-drop"
            className={``}
          />
        )}
      </div>
      <ConstructorElement
        text={data[0].name}
        price={data[0].price}
        thumbnail={data[0].image}
        type="bottom"
        isLocked={true}
        extraClass={'ml-8'}
      />
      <div className={`mt-10 mr-4 ${styles.order}`}>
        <p className="text text_type_digits-medium mr-2">610</p>
        <CurrencyIcon type="primary" />
        <Button
          onClick={handleOpenModal}
          htmlType="button"
          type="primary"
          size="large"
          extraClass={'ml-10'}
        >
          Оформить заказ
        </Button>

        {isOpen && (
          <>
            <ModalOverlay onClose={handleCloseModal} />
            {ReactDOM.createPortal(
              <Modal onClose={handleCloseModal}>
                <p
                  className={`mt-30 mb-8 text text_type_digits-large ${stylesModal.numberOrder}`}
                >
                  034536
                </p>
                <p className={`mb-15 text text_type_main-medium`}>
                  идентификатор заказа
                </p>
                <div className={` ${styles.checkMarkContainer}`}>
                
                  <img className={`${styles.checkMarktopImage}`} src={checkMark} alt="checkMark" />
                  <img className={`${styles.checkMarktopImage1}`} src={checkMarkBg1} alt="checkMark" />
                  <img className={`${styles.checkMarktopImage2}`} src={checkMarkBg2} alt="checkMark" />
                  <img className={`${styles.checkMarktopImage3}`} src={checkMarkBg3} alt="checkMark" />
                  
                </div>

                <p className={`mt-15 mb-2 text text_type_main-default`}>
                  Ваш заказ начали готовить
                </p>
                <p
                  className={`mb-30 text text_type_main-default text_color_inactive`}
                >
                  Дождитесь готовности на орбитальной станции
                </p>
              </Modal>,
              document.getElementById('modal-root')
            )}
          </>
        )}
      </div>
    </>
  )
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(checkType).isRequired,
}

export default BurgerConstructor

import React, { useState } from 'react'

import { ConstructorElement, Button, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'

import Modal from '../Modal/Modal'
import OrderDetails from '../OrderDetails/OrderDetails'

import PropTypes from 'prop-types'
import checkType from '../../utils/BurgerIngredientsProps.jsx'

import styles from './BurgerConstructor.module.css'
import dragDropIcon from '../../images/drag-and-drop-icon.png'

const BurgerConstructor = ({ data }) => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const handleOpenModal = () => {
    setIsOpenModal(true)
  }

  const handleCloseModal = () => {
    setIsOpenModal(false)
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
          <img src={dragDropIcon} alt="drag-and-drop" className={``} />
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

        {isOpenModal && (
          <Modal onClose={handleCloseModal}>
            <OrderDetails />
          </Modal>
        )}
      </div>
    </>
  )
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(checkType).isRequired,
}

export default BurgerConstructor

import React, { useState, useContext, useMemo } from 'react'

import PropTypes from 'prop-types'
import { IngredientsProps } from '../../utils/types.js'
import { postOrder } from '../../utils/api.jsx'

import {
  ConstructorElement,
  Button,
  CurrencyIcon,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import Modal from '../Modal/Modal'
import OrderDetails from '../OrderDetails/OrderDetails'

import styles from './BurgerConstructor.module.css'
import dragDropIcon1 from '../../images/drag-and-drop-icon1.png'
import dragDropIcon2 from '../../images/drag-and-drop-icon2.png'
import { OrderContext } from '../../utils/productsContext.js'

const BurgerConstructor = () => {
  const orderIngredients = useContext(OrderContext)

  const [isOpenModal, setIsOpenModal] = useState(false)

  const [apiResponse, setApiResponse] = useState(null)

  const handleOpenModal = () => {
    const orderIds = {
      ingredients: orderIngredients.map((el) => el._id),
    }

    postOrder(orderIds)
      .then((response) => response.json())
      .then((data) => {
        console.log('Ответ от сервера:', data)
        setApiResponse(data)
      })
      .catch((error) => {
        console.error(error)
      })

    setIsOpenModal(true)
  }

  const handleCloseModal = () => {
    setIsOpenModal(false)
  }

  const orderSum = useMemo(
    () =>
      orderIngredients.reduce((accum, el) => {
        return el.type === 'bun' ? accum + el.price * 2 : accum + el.price
      }, 0),
    [orderIngredients]
  )

  const productBun = orderIngredients.find((el) => {
    return el.type === 'bun'
  })

  return (
    <>
      <div className={`mt-25`}>
        {orderIngredients.length ? (
          <>
            <ConstructorElement
              text={productBun.name}
              price={productBun.price}
              thumbnail={productBun.image}
              type="top"
              isLocked={true}
              extraClass={'mb-4 ml-8'}
            />

            <div className={`${styles.scroll}`}>
              {orderIngredients.map((el) => {
                if (el.type !== 'bun') {
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
                } else {
                  return null
                }
              })}
            </div>

            <ConstructorElement
              text={productBun.name}
              price={productBun.price}
              thumbnail={productBun.image}
              type="bottom"
              isLocked={true}
              extraClass={'ml-8'}
            />
          </>
        ) : (
          <div className={`mb-4 ${styles.wrapDragDropIcon}`}>
            <img
              src={dragDropIcon1}
              alt="drag-and-drop"
              className={`${styles.dragDropIcon}`}
            />
            <img
              src={dragDropIcon2}
              alt="drag-and-drop"
              className={`${styles.dragDropIcon}`}
            />
          </div>
        )}

        <div className={`mt-10 mr-4 ${styles.order}`}>
          <p className="text text_type_digits-medium mr-2">{orderSum}</p>

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
              <OrderDetails apiResponse={apiResponse} />
            </Modal>
          )}
        </div>
      </div>
    </>
  )
}

BurgerConstructor.propTypes = {
  products: PropTypes.shape({
    list: PropTypes.arrayOf(IngredientsProps).isRequired,
  }),
}

export default BurgerConstructor

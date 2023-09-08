import React, { useState, useContext } from 'react'

import PropTypes from 'prop-types'
import { IngredientsProps } from '../../utils/types.js'

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
import { ProductsContext } from '../../utils/productsContext.js'

const BurgerConstructor = () => {

  const {products} = useContext(ProductsContext);

  const [isOpenModal, setIsOpenModal] = useState(false)

  const handleOpenModal = () => {
    setIsOpenModal(true)
  }

  const handleCloseModal = () => {
    setIsOpenModal(false)
  }

  return (
    <>
      <div className={`mt-25`}>
        {products.list.length ? (
          <>
            <ConstructorElement
              text={products.list[0].name}
              price={products.list[0].price}
              thumbnail={products.list[0].image}
              type="top"
              isLocked={true}
              extraClass={'mb-4 ml-8'}
            />
            <div className={`${styles.scroll}`}>
              {products.list.map((el) => {
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
              text={products.list[0].name}
              price={products.list[0].price}
              thumbnail={products.list[0].image}
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
      </div>
    </>
  )
}


BurgerConstructor.propTypes = {
  products: PropTypes.shape({
    list: PropTypes.arrayOf(IngredientsProps).isRequired
  })
}

export default BurgerConstructor

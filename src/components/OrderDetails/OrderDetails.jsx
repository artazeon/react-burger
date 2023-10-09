import React, { useContext } from 'react'

import { ProductsContext } from '../../utils/productsContext'

import styles from './OrderDetails.module.css'
import checkMark from '../../images/checkMark/checkMark.svg'
import checkMarkBg1 from '../../images/checkMark/checkMarkBg1.svg'
import checkMarkBg2 from '../../images/checkMark/checkMarkBg2.svg'
import checkMarkBg3 from '../../images/checkMark/checkMarkBg3.svg'

const OrderDetails = ({ apiResponse }) => {
  
  const { products } = useContext(ProductsContext)

  return apiResponse === null ? (
    <>
      <p
        className={`mr-25 ml-25 mt-30 mb-8 text text_type_digits-large ${styles.numberOrder}`}
      >
        ****
      </p>
      <p className={`mb-15 text text_type_main-medium`}>
        ожидание номера заказа
      </p>

      <p className={`mt-15 mb-2 text text_type_main-default`}>
        Ваш заказ в обработке
      </p>
      <p className={`mb-30 text text_type_main-default text_color_inactive`}>
        Дождитесь получения номера заказа
      </p>
    </>
  ) : (
    <>
      <p
        className={`mr-25 ml-25 mt-30 mb-8 text text_type_digits-large ${styles.numberOrder}`}
      >
        {apiResponse.order.number}
      </p>
      <p className={`mb-15 text text_type_main-medium`}>идентификатор заказа</p>

      <div className={` ${styles.checkMarkContainer}`}>
        <img
          className={`${styles.checkMarktopImage}`}
          src={checkMark}
          alt="checkMark"
        />
        <img
          className={`${styles.checkMarktopImage1}`}
          src={checkMarkBg1}
          alt="checkMark"
        />
        <img
          className={`${styles.checkMarktopImage2}`}
          src={checkMarkBg2}
          alt="checkMark"
        />
        <img
          className={`${styles.checkMarktopImage3}`}
          src={checkMarkBg3}
          alt="checkMark"
        />
      </div>

      <p className={`mt-15 mb-2 text text_type_main-default`}>
        Ваш заказ начали готовить
      </p>
      <p className={`mb-30 text text_type_main-default text_color_inactive`}>
        Дождитесь готовности на орбитальной станции
      </p>
    </>
  )
}

export default OrderDetails

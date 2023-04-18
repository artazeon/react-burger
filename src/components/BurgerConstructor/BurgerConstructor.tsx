import React from 'react'
// import './index.css'
import styles from './BurgerConstructor.module.css'
import data from '../../utils/data.js'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const BurgerConstructor = () => {
  console.log(data)
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
      {!data.length ? 'код с мапом' : 'картинка драгдроп'}


        {data.map((el) => {
          return (
            <div className={`mb-4 ${styles.compound}`}>
              





              <DragIcon type="primary" />
              <ConstructorElement
                text={el.name}
                price={el.price}
                thumbnail={el.image}
                extraClass={'ml-2'}
                key={el._id}
              />
            </div>
          )
        })}
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
          htmlType="button"
          type="primary"
          size="large"
          extraClass={'ml-10'}
        >
          Оформить заказ
        </Button>
      </div>
    </>
  )
}

export default BurgerConstructor

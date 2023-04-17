import React from 'react'
// import './index.css'
import styles from './BurgerConstructor.module.css'
import data from '../../utils/data.js'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'

const BurgerConstructor = () => {
  console.log(data)
  return (
    <>
      <div className={`mt-25 ${styles.scroll}`}>
        <ConstructorElement
          text={data[0].name}
          price={data[0].price}
          thumbnail={data[0].image}
          type="top"
          isLocked={true}
          extraClass={'mb-4'}
        />

        {data.map((el) => {
          return (
            <ConstructorElement
              text={el.name}
              price={el.price}
              thumbnail={el.image}
              extraClass={'mb-4'}
              key={el._id}
            />
          )
        })}

        <ConstructorElement
          text={data[0].name}
          price={data[0].price}
          thumbnail={data[0].image}
          type="bottom"
          isLocked={true}
        />
      </div>
      <div className={styles.confirm}>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          extraClass={'mb-4'}
        >
          Нажми на меня
        </Button>
      </div>
    </>
  )
}

export default BurgerConstructor

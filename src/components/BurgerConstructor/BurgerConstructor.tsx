import React from 'react'
// import './index.css'
import styles from './BurgerConstructor.module.css'
import data from '../../utils/data.js'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'

const BurgerConstructor = () => {
  console.log(data)
  return (
    <><div className={styles.scroll}>
      <p>BurgerConstructors</p>
      
      <ConstructorElement
        text={data[0].name}
        price={data[0].price}
        thumbnail={data[0].image}
        type="top"
      />
      {data.map((el) => {
        return (
          <ConstructorElement
            text={el.name}
            price={el.price}
            thumbnail={el.image}
          />
        )
      })}
      </div>
    </>
  )
}

export default BurgerConstructor

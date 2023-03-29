import React from 'react'
// import './index.css'
import styles from './BurgerIngredients.module.css'
import data from '../../utils/data.js'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'

const BurgerIngredients = () => {
  console.log(data)
  return (
    <>
      <p>BurgerConstructor</p>
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
    </>
  )
}

export default BurgerIngredients

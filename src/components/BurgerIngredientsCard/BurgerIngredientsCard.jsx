import React from 'react'
import styles from './BurgerIngredientsCard.module.css'

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components'

const BurgerIngredientsCard = ({el, togglePopup}) => {
  return (
    <div className={styles.card} key={el._id} onClick={() => togglePopup(el)}>
      <img src={el.image} alt={el.name}></img>
      <Counter count={1} size="default" extraClass="m-1" />
      <div className={`mb-2 ${styles.descrItem}`}>
        <span className={`text text_type_digits-default mr-2`}>{el.price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <div className={`text text_type_main-default ${styles.descrItem}`}>
        {el.name}
      </div>
    </div>
  )
}

export default BurgerIngredientsCard

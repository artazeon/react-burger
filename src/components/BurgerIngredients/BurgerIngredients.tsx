import React from 'react'
// import './index.css'
import styles from './BurgerIngredients.module.css'
import data from '../../utils/data.js'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const BurgerIngredients = () => {
  const [current, setCurrent] = React.useState('one')
  return (
    <>
      <div className="text text_type_main-large mt-10 mb-5">Собери бургер</div>

      <div style={{ display: 'flex' }}>
        <Tab value="one" active={current === 'one'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === 'two'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === 'three'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className={styles.scroll}>
        <div className="text text_type_main-medium mt-10 mb-6">Булки</div>
        <div className={styles.category}>
          {data.map((el) => {
            if (el.type === 'bun') {
              return (
                <div className={styles.card} key={el._id}>
                  <img src={el.image} alt={el.name}></img>
                  <div className={`mb-2 ${styles.descrItem}`}>
                    <span className={`text text_type_digits-medium mr-2`}>
                      {el.price}
                    </span>
                    <CurrencyIcon type="primary" />
                  </div>
                  <div
                    className={`text text_type_main-default ${styles.descrItem}`}
                  >
                    {el.name}
                  </div>
                </div>
              )}
              else return 'Нет в наличии'
          })}
          
        </div>

        <div className="text text_type_main-medium mt-10 mb-6">Соусы</div>
        <div className={styles.category}>
          {data.map((el) => {
            if (el.type === 'sauce') {
              return (
                <div className={styles.card} key={el._id}>
                  <img src={el.image} alt={el.name}></img>

                  <div className={`mb-2 ${styles.descrItem}`}>
                    <span className={`text text_type_digits-medium mr-2`}>
                      {el.price}
                    </span>
                    <CurrencyIcon type="primary" />
                  </div>
                  <div
                    className={`text text_type_main-default ${styles.descrItem}`}
                  >
                    {el.name}
                  </div>
                </div>
              )}
              else return 'Нет в наличии'
          })}
        </div>
        <div className="text text_type_main-medium mt-10 mb-6">Начинки</div>
        <div className={styles.category}>
          {data.map((el) => {
            if (el.type === 'main') {
              return (
                <div className={styles.card} key={el._id}>
                  <img
                    src={el.image}
                    alt={el.name}
                    className={`pl-2 pr-2`}
                  ></img>

                  <div className={`mb-2 mt-2 ${styles.descrItem}`}>
                    <span className={`text text_type_digits-medium mr-2`}>
                      {el.price}
                    </span>
                    <CurrencyIcon type="primary" />
                  </div>
                  <div
                    className={`text text_type_main-default ${styles.descrItem}`}
                  >
                    {el.name}
                  </div>
                </div>
              )}
              else return 'Нет в наличии'
          })}
        </div>
      </div>
    </>
  )
}

export default BurgerIngredients

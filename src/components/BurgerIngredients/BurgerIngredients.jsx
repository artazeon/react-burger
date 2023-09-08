import React, { useState, useContext } from 'react'

import PropTypes from 'prop-types'
import {IngredientsProps} from '../../utils/types.js'

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import Modal from '../Modal/Modal'
import IngredientDetails from '../IngredientDetails/IngredientDetails'
import BurgerIngredientsCard from '../BurgerIngredientsCard/BurgerIngredientsCard'
import { ProductsContext } from '../../utils/productsContext'

import styles from './BurgerIngredients.module.css'

const BurgerIngredients = () => {

  const {products} = useContext(ProductsContext);


  
  const [current, setCurrent] = useState('one')

  const [isOpenModal, setIsOpenModal] = useState(false)

  const [cardSelected, setCardSelected] = useState(null)

  const togglePopup = (el) => {
    el && setCardSelected(el)
    setIsOpenModal(true)
  }

  const handleCloseModal = () => {
    setIsOpenModal(false)
  }

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
          {products.list.map((el) => {
            if (el.type === 'bun') {
              return <BurgerIngredientsCard togglePopup={togglePopup} el={el} key={el._id}/>
            }
            return null
          })}
        </div>

        <div className="text text_type_main-medium mt-10 mb-6">Соусы</div>
        <div className={styles.category}>
          {products.list.map((el) => {
            if (el.type === 'sauce') {
              return <BurgerIngredientsCard togglePopup={togglePopup} el={el} key={el._id}/>
            }
            return null
          })}
        </div>
        <div className="text text_type_main-medium mt-10 mb-6">Начинки</div>
        <div className={styles.category}>
          {products.list.map((el) => {
            if (el.type === 'main') {
              return <BurgerIngredientsCard togglePopup={togglePopup} el={el} key={el._id}/>
            } else return null
          })}
        </div>
        {isOpenModal && cardSelected && (
          <Modal onClose={handleCloseModal} title={'Детали ингридиента'}>
            <IngredientDetails cardSelected={cardSelected}/>
          </Modal>
        )}
      </div>
    </>
  )
}




// BurgerIngredients.propTypes = {
//   data: PropTypes.arrayOf(IngredientsProps).isRequired,
// }


BurgerIngredients.propTypes = {
  products: PropTypes.shape({
    list: PropTypes.arrayOf(IngredientsProps).isRequired
  })
}

export default BurgerIngredients

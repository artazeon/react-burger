import React, { useState } from 'react'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'

import PropTypes from 'prop-types'
import checkType from '../../utils/checkType.jsx'

import Modal from '../Modal/Modal'
import IngredientDetails from '../IngredientDetails/IngredientDetails'
import BurgerIngredientsCard from '../BurgerIngredientsCard/BurgerIngredientsCard'

import styles from './BurgerIngredients.module.css'

const BurgerIngredients = ({ data }) => {
  const [current, setCurrent] = useState('one')

  const [isOpenModal, setIsOpenModal] = useState(false)

  const [cardSelected, setCardSelected] = useState(null)

  const togglePopup = (el) => {
    el && setCardSelected(el)
    setIsOpenModal(true)
  }

  // const handleOpenModal = () => {
  //   setIsOpenModal(true)
  // }

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
          {data.map((el) => {
            if (el.type === 'bun') {
              return <BurgerIngredientsCard togglePopup={togglePopup} el={el} key={el._id}/>
            }
            return null
          })}
        </div>

        <div className="text text_type_main-medium mt-10 mb-6">Соусы</div>
        <div className={styles.category}>
          {data.map((el) => {
            if (el.type === 'sauce') {
              return <BurgerIngredientsCard togglePopup={togglePopup} el={el} key={el._id}/>
            }
            return null
          })}
        </div>
        <div className="text text_type_main-medium mt-10 mb-6">Начинки</div>
        <div className={styles.category}>
          {data.map((el) => {
            if (el.type === 'main') {
              return <BurgerIngredientsCard togglePopup={togglePopup} el={el} key={el._id}/>
            } else return null
          })}
        </div>
        {isOpenModal && cardSelected && (
          <Modal onClose={handleCloseModal} title={'Детали ингридиента'}>
            <IngredientDetails data={data} cardSelected={cardSelected}/>
          </Modal>
        )}
      </div>
    </>
  )
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(checkType).isRequired,
}

export default BurgerIngredients

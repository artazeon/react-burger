import React from 'react'
// import './index.css'
import styles from './BurgerIngredients.module.css'
import data from '../../utils/data.js'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'

const BurgerIngredients = () => {

  const [current, setCurrent] = React.useState('one')
  return (
    <>
    <p>BurgerIngredients</p>
    <div style={{ display: 'flex' }}>
      <Tab value="one" active={current === 'one'} onClick={setCurrent}>
        One
      </Tab>
      <Tab value="two" active={current === 'two'} onClick={setCurrent}>
        Two
      </Tab>
      <Tab value="three" active={current === 'three'} onClick={setCurrent}>
        Three
      </Tab>
    </div>
    {
      data.map((el)=> {
        return (
          <div>{el.name}</div>
        )
      })
    }


    </>
    
  )
}

export default BurgerIngredients

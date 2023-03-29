import React from 'react'
import './App.css'
import styles from './App.module.css'

import AppHeader from './components/AppHeader/AppHeader'
import BurgerIngredients from './components/BurgerIngredients/BurgerIngredients'
import BurgerConstructor from './components/BurgerConstructor/BurgerConstructor'

function App() {
  return (
    <>
      <AppHeader />
      <div className={styles.container}>
        <div className={`mr-10 ${styles.leftSide}`}>
          <BurgerIngredients />
        </div>
        <div className={` ${styles.rightSide}`}>
          <BurgerConstructor />

        </div>
      </div>
    </>
  )
}

export default App

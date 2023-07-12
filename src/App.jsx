import React, { useState, useEffect } from 'react'

import AppHeader from './components/AppHeader/AppHeader'
import BurgerIngredients from './components/BurgerIngredients/BurgerIngredients'
import BurgerConstructor from './components/BurgerConstructor/BurgerConstructor'

import styles from './App.module.css'

const API_URL = 'https://norma.nomoreparties.space/api/ingredients'

function App() {
  const [products, setProducts] = useState({
    loading: true,
    list: [],
  })

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(API_URL)
        const position = await response.json()

        setProducts({ loading: false, list: position.data })
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <AppHeader />

      {products.loading ? (
        
        <div className={`mr-10 ${styles.loader}`}><p>Загрузка товаров...</p></div>
      ) : (
        <div className={styles.container}>
          <div className={`mr-10 ${styles.leftSide}`}>
            <BurgerIngredients data={products.list} />
          </div>
          <div className={` ${styles.rightSide}`}>
            <BurgerConstructor data={products.list} />
          </div>
        </div>
      )}
    </>
  )
}

export default App

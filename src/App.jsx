import React, { useState, useEffect } from 'react'

import {API_URL} from './utils/constants'

import AppHeader from './components/AppHeader/AppHeader'
import BurgerIngredients from './components/BurgerIngredients/BurgerIngredients'
import BurgerConstructor from './components/BurgerConstructor/BurgerConstructor'
import { ProductsContext } from './utils/productsContext'

import styles from './App.module.css'

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
        <div className={`mr-10 ${styles.loader}`}>
          <p>Загрузка товаров...</p>
        </div>
      ) : (
        <div className={`container`}>
          <div className={styles.wrapApp}>
            <div className={`mr-10 ${styles.leftSide}`}>

            <ProductsContext.Provider value={{products, setProducts}}>
              <BurgerIngredients />
            </ProductsContext.Provider>

            </div>
            <div className={` ${styles.rightSide}`}>
            <ProductsContext.Provider value={{products, setProducts}}>             
              <BurgerConstructor />
            </ProductsContext.Provider>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default App

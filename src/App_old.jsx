// import React from 'react'
import React, { useState, useEffect } from 'react'
import './App.css'
import styles from './App.module.css'
//import data from './utils/data.js'
import AppHeader from './components/AppHeader/AppHeader'
import BurgerIngredients from './components/BurgerIngredients/BurgerIngredients'
import BurgerConstructor from './components/BurgerConstructor/BurgerConstructor'

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          'https://norma.nomoreparties.space/api/ingredients'
        )
        const position = await response.json()
        setProducts(position.data)
        setLoading(false);
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [products])

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <AppHeader />
      <div className={styles.container}>
        <div className={`mr-10 ${styles.leftSide}`}>
          <BurgerIngredients data={products} />
        </div>
        <div className={` ${styles.rightSide}`}>
          <BurgerConstructor data={products} />
        </div>
      </div>
    </>
  )
}

export default App

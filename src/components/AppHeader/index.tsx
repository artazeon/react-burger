import React from 'react'
import './index.css'

import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const AppHeader = () => {
  return (
    <header>
        <BurgerIcon type="primary" />
      <a href="#" className="p-2" style={{ color: 'white' }}>
        Конструктор
      </a>
      <ListIcon type="secondary" />
      <a href="#" className="p-2" style={{ color: 'white' }}>
      Лента заказов
      </a>
      <Logo />
    </header>
  )
}

export default AppHeader

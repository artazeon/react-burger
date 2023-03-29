import React from 'react'
// import './index.css'
import styles from './AppHeader.module.css'

import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const AppHeader = () => {
  return (
    <header className={`pt-4 pb-4 ${styles.header}`}>
      <div className={`${styles.container}`}>
        <div className={`${styles.wrapButtonLeft}`}>
          <div className={`p-5 ${styles.button}`}>
            <BurgerIcon type="primary" />
            <a
              href="#"
              className={`pl-2 text text_type_main-default ${styles.buttonText} ${styles.buttonTextActive}`}
            >
              Конструктор
            </a>
          </div>

          <div className={`p-5 ${styles.button}`}>
            <ListIcon type="secondary" />
            <a
              href="#"
              className={`pl-2 text text_type_main-default ${styles.buttonText}`}
            >
              Лента заказов
            </a>
          </div>
        </div>
        <div className={`${styles.wrapLogo}`}>
          <Logo />
        </div>
        <div className={`p-5 ${styles.button}`}>
          <ProfileIcon type="secondary" />
          <a
            href="#"
            className={`pl-2 text text_type_main-default ${styles.buttonText}`}
          >
            Личный кабинет
          </a>
        </div>
      </div>
    </header>
  )
}

export default AppHeader

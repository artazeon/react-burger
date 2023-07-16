import React from 'react'

import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'

import styles from './AppHeader.module.css'

const AppHeader = () => {
  return (
    <header className={`pt-4 pb-4 ${styles.header}`}>
      <div className={`${styles.container}`}>
        <div className={`${styles.wrapButtonLeft}`}>
          <div className={`p-5 ${styles.button}`}>
            <BurgerIcon type="primary" />
            <a
              href="http://localhost:3000/"
              className={`pl-2 text text_type_main-default ${styles.buttonText} ${styles.buttonTextActive}`}
            >
              Конструктор
            </a>
          </div>

          <div className={`p-5 ${styles.button}`}>
            <ListIcon type="secondary" />
            <a
              href="http://localhost:3000/"
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
            href="http://localhost:3000/"
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

import React from 'react'

import styles from './IngredientDetails.module.css'

const IngredientDetails = ({ cardSelected }) => {
  return (
    <>
      <img
        className={`mr-25 ml-25`}
        src={cardSelected.image_large}
        alt={cardSelected.title}
      ></img>
      <p className={`mt-4 text text_type_main-medium`}>{cardSelected.name}</p>

      <div className={`mt-8 mb-15 ${styles.energyContainer}`}>
        <div className={`${styles.energyValue}`}>
          <span
            className={`mb-4 text text_type_main-default text_color_inactive`}
          >
            Калории, ккал
          </span>
          <span className={`text text_type_digits-default text_color_inactive`}>
            {cardSelected.calories}
          </span>
        </div>
        <div className={`${styles.energyValue}`}>
          <span
            className={`mb-4 text text_type_main-default text_color_inactive`}
          >
            Белки, г
          </span>
          <span className={`text text_type_digits-default text_color_inactive`}>
            {cardSelected.proteins}
          </span>
        </div>
        <div className={` ${styles.energyValue}`}>
          <span
            className={`mb-4 text text_type_main-default text_color_inactive`}
          >
            Жиры, г
          </span>
          <span className={`text text_type_digits-default text_color_inactive`}>
            {cardSelected.fat}
          </span>
        </div>
        <div className={` ${styles.energyValue}`}>
          <span
            className={`mb-4 text text_type_main-default text_color_inactive`}
          >
            Углеводы, г
          </span>
          <span className={`text text_type_digits-default text_color_inactive`}>
            {cardSelected.carbohydrates}
          </span>
        </div>
      </div>
    </>
  )
}

export default IngredientDetails

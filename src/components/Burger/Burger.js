import React from 'react';
import { withRouter } from 'react-router-dom';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  console.log(props);
  // convert ingredients object to array with only the keys
  let transformedIngredients = Object.keys(props.ingredients)
    .map(ingredientKey => {
      return [...Array(props.ingredients[ingredientKey])]
        .map((_, i) => {
          return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
        })
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    })

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p style={{textAlign: "center"}}>please start adding ingredients</p>
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

export default withRouter(burger);

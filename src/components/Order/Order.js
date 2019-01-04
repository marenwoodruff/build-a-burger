import React from 'react';

import classes from './Order.css';

const order = (props) => {
  const ingredients = [];

  for (let ingredient in props.ingredients) {
    ingredients.push({
      name: ingredient,
      amount: props.ingredients[ingredient]
    });
  }

  const ingredientOutput = ingredients.map(ingredient => {
    return (
      <span 
        style={{display: 'inline-block', margin: '0 8px', border: '1px solid #ccc', padding: '5px'}}
        key={ingredient.name}>
        {ingredient.name} ({ingredient.amount}) 
      </span>
    );
  })

  return (
    <div className={classes.Order}>
      <p>ingredients: {ingredientOutput}</p>
      <p>price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
    </div>
  )
}

export default order;
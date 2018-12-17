import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  {label: 'gem lettuce', type: 'salad'},
  {label: 'beecher\'s cheddar', type: 'cheese'},
  {label: 'veggie bacon', type: 'bacon'},
  {label: 'beyond burger', type: 'meat'}
];

const buildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
      {controls.map(ctrl => (
        <BuildControl 
          key={ctrl.label} 
          label={ctrl.label} 
          added={() => props.ingredientAdded(ctrl.type)}
          deleted={() => props.ingredientDeleted(ctrl.type)} 
          purchasable={props.purchasable}
          disabled={props.disabled[ctrl.type]} />
      ))}
      <button
        className={classes.OrderButton}
        disabled={!props.purchasable}>
        order now
      </button>
    </div>
  )
}

export default buildControls;

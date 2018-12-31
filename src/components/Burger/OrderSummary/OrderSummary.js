import React, { Component } from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  // this could be a functional component, it doesn't have to be a class
  // figure out when the component will udpate
  componentWillUpdate() {
    console.log('[OrderSummary] will update');
  }

  render () {
    const ingredientSummary = Object.keys(this.props.ingredients)
      .map((ingredientKey) => {
        return (
          <li key={ingredientKey}>
            <span style={{textTransform: 'capitalize'}}>{ingredientKey}</span>: {this.props.ingredients[ingredientKey]}
          </li>)
      });

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p>Continue to checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Cancel</Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>Continue</Button>
      </Aux>
    )
  }
};

export default OrderSummary;
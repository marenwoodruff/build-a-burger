import React, { Component } from 'react';
import axios from '../../../axios-orders';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    console.log(this.props.ingredients);
    this.setState({
      loading: true
    });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Mars Ventrilloquest',
        address: {
          street: 'test street 1',
          zipCoder: '91711',
          country: 'USA'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    }
    // need to add .json for firebase
    axios.post('/orders.json', order)
      .then(response => {
        this.setState({
          loading: false
        })
        this.props.history.push('/');
      })
      .catch(error => {
        console.log(error)
        this.setState({
          loading: false
        })
      });
  }

  render () {
    let form = (
      <form>
        <input className={classes.Input} type="text" name="name" placeholder="your name"/>
        <input className={classes.Input} type="text" name="email" placeholder="your email"/>
        <input className={classes.Input} type="text" name="street" placeholder="your street"/>
        <input className={classes.Input} type="text" name="postalCode" placeholder="your postal code"/>
        <Button btnType='Success' clicked ={this.orderHandler}>order</Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>enter your contact data</h4>
        {form}
      </div>
    )
  }
}

export default ContactData;
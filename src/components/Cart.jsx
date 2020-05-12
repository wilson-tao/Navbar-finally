import React from 'react';


function Cart(props) {
  return (
    <div>
      <i className="glyphicon glyphicon-shopping-cart"></i>
      <div>
        Cart: {props.counter}
      </div>
    </div>
  )
}
 
export default Cart;

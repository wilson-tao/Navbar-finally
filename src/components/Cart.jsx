import React from 'react';


function Cart(props) {
  return (
    <div>
      <div className="location">
      <a href="#">
        <i className="map fa-map-signs"></i>
        <span className="storename">SketchVille</span>
        </a>
      </div>
      <div className="vl"></div>
      <div className="cart">
      <a href="#" className="cart cartcolor d-inline-flex" aria-label="View your shopping cart">
          <i className="fas fa fa-shopping-cart fa-lg"></i>
          {/* <span className="cartnumber">
          {props.cartCount}
          </span> */}
          <div class="cartnumber">{props.cartCount}</div>
        </a>
      </div>
    </div>
  )
}
 
export default Cart;


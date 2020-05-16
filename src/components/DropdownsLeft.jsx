import React from 'react';


function DropdownsLeft(props) {
  return (
<div className="dropdown-left">
  <button className="btn colorbtn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Products
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button className="dropdown-item" type="button">Stuff</button>
    <button className="dropdown-item" type="button">Worse Stuff</button>
    <button className="dropdown-item" type="button">The Worst Stuff</button>
  </div>

  <button className="btn colorbtn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Brands
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button className="dropdown-item" type="button">Some Brands</button>
    <button className="dropdown-item" type="button">Worse Brands</button>
    <button className="dropdown-item" type="button">The Worst Brands</button>
  </div>

  <button className="btn colorbtn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Rip Offs
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button className="dropdown-item" type="button">Rip Offs</button>
    <button className="dropdown-item" type="button">More Rips Offs</button>
    <button className="dropdown-item" type="button">The "Best" Ripoffs</button>
  </div>

  <button className="btn colorbtn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Services
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button className="dropdown-item" type="button">Interested in a service?</button>
    <button className="dropdown-item" type="button">Whatchu want</button>
    <button className="dropdown-item" type="button">We won't do it</button>
  </div>
</div>
  )
}
 
export default DropdownsLeft;

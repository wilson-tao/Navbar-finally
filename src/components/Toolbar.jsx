import React from 'react';
import Cart from './Cart.jsx'
import DropdownsLeft from './DropdownsLeft.jsx';
import DropdownsRight from './DropdownsRight.jsx';


function Toolbar(props) {
  return (
  <nav className="navbar navbarplus navbar-expand-lg navbar-light bestbuycolor">
      <a className="navbarlogo" href="#">
        <img src="https://worstbuy.s3.us-east-2.amazonaws.com/worstbuylogo.jpg" className="img-responsive" />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>

  <div className="optionslist" id="navbarSupportedContent">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Credit Cards </a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">Worst Deals </a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">Rip of the Day </a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">Gift Cards </a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">Gift Ideas </a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">For Your Business </a>
      </li>
    </ul>
  </div>
  <div>
    <form className="searchbar" onSubmit={props.childSubmitHandler}>
      <input className="form-control mr-sm-2" type="search" placeholder="Search Worst Buy" aria-label="Search" onChange={props.childChangeHandler}></input>
      <button className="btn whitebtn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
  <div>
  <Cart cartCount={props.counter} />
  </div>
  <div>
    <DropdownsLeft />
    <div className="block_1">Lorem</div> <hr />
    <DropdownsRight />
  </div>
</nav>
  )
}
 
export default Toolbar;
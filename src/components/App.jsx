import React, { Component } from "react";
import axios from 'axios';
import Toolbar from './Toolbar.jsx';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery : '',
      products: [],
      displayItem : {},
      cartCount: 0
    };

      // bind functions
      this.onChangeHandler = this.onChangeHandler.bind(this);
      this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

  componentDidMount() {
    this.getAllProducts();
    document.addEventListener('click', () => this.getCartValue());
  }
  
  getCartValue() {
    let search = document.getElementById('cory_inc');
    console.log(search, 'hi searching');
    if (search) {
      this.setState({
        cartCount: search.value,
      })
    }
  }
  // api get request for entire list
    // return array
  getAllProducts() {
    axios.get('http://fecnavbar-env.eba-xm9ek7js.us-east-2.elasticbeanstalk.com/api/products')
    .then(res => {
      this.setState({ products: res.data })
    })
    .catch(err => {
      console.log(err, 'client get request error')
    })
  }
  

  
  onChangeHandler(event) {
    this.setState({ searchQuery: event.target.value })
  }

  onSubmitHandler(event) {
    // search functionality (use other js shorthand filters?)
    // sets state.displayItem to searched item, not yet rendered
      // also considering converting displayitem into array instead to display multiple relevant searches?
    for (var i = 0; i < this.state.products.length; i++) {
      // can check for both SKU and product name
      if (this.state.products[i].SKU === parseInt(this.state.searchQuery) || this.state.products[i].Product_Name === this.state.searchQuery) {
        this.setState({ displayItem: this.state.products[i]})
      }
    }
    event.preventDefault();
  }



  render() {
    return (
      <div>
        <div>
          <Toolbar query={this.state.searchQuery} counter={this.state.cartCount} childChangeHandler={this.onChangeHandler} childSubmitHandler={this.onSubmitHandler}/>
        </div>
        <div>
          {/* <img src="https://worstbuy.s3.us-east-2.amazonaws.com/footer.png" className="footerpos" /> */}
        </div>
      </div>
    
    )
  }
}

// form open (on submit)

  // input bar container

    // update state with input on change

  // submit button
    
    // on change will activate change handler

      // change handler will activate get api

      // returns new item details and page?
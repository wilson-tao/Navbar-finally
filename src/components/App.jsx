import React, { Component } from "react";
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery : '',
      searchReturn: []
    };

      // bind functions
  }

  // api get request with search query as body
    // returning array?
  
  
  componentDidMount() {

  }

  
  onChangeHandler(event) {
    this.setState({ searchQuery: event.target.value })
  }

  onSubmitHandler(event) {
    
  }



  render() {
    return (
      <div>
        <form onSubmit={onSubmitHandler}>
          <input onChange={onChangeHandler}>
          Search Worst Buy
          </input>
          <button>
            Search
          </button>
        </form>
      </div>
    );
  }
}

// form open (on submit)

  // input bar container

    // update state with input on change

  // submit button
    
    // on change will activate change handler

      // change handler will activate get api

      // returns new item details and page?
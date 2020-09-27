import React, { Component } from 'react';
import Select from 'react-select';
import NumberFormat from 'react-number-format';

import { product } from './data/Product';

import './App.css';

class App extends Component {
  state = {
    selectedOption: null,
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    // let name = selectedOption.label
    // let price = selectedOption.value
    // console.log(`Option selected:`, selectedOption);
    // console.log(`Product:`, name);
    // console.log(`Price:`, price);
  };

  showInfo = () => {
    let initialPrice = 0
    if (this.state.selectedOption !== null) {
      return (
        <div>
          {/* <p>Product : {this.state.selectedOption.label}</p>
          <p>Price : Rp.{this.state.selectedOption.value}</p> */}
          <NumberFormat value={this.state.selectedOption.value} displayType={'text'} thousandSeparator={true} prefix={'Rp'} />
        </div>
      )
    } else {
      return (
        <div>
          <NumberFormat value={initialPrice} displayType={'text'} thousandSeparator={true} prefix={'Rp'}/>
        </div>
      )
    }
  }

  render() {
    const { selectedOption } = this.state;
    const selectProduct = 'Product Name'

    return (
      <div className="App">
        <div className="Select">
          <Select value={selectedOption} onChange={this.handleChange} options={product} placeholder={selectProduct}/>
        </div>
        <div className="Price">
          {this.showInfo()}
        </div>
      </div>
    );
  }
}

export default App;
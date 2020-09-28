import React, { Component } from 'react';
import Select from 'react-select';
import NumberFormat from 'react-number-format';

import { product } from './data/Product';

import './assets/App.css';

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
    const initialPrice = 0
    const changeLabelColor = document.querySelectorAll('label')
    const changeBorderPrice = document.getElementById('Color-Price')

    if (this.state.selectedOption !== null) {
      for (let i = 0; i < changeLabelColor.length; i++) {
        changeLabelColor[i].style.color = "black";
      }
      changeBorderPrice.style.borderColor = "#2f89ff"
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
          <NumberFormat value={initialPrice} displayType={'text'} thousandSeparator={true} prefix={'Rp'} />
        </div>
      )
    }
  }

  customStyles = value => ({
    control: (provided, state) => ({
      ...provided,
      borderColor: value ? "#2f89ff" : "#CCCCCC"
    }),
    singleValue: (provided, state) => {
      const color = state ? "black" : "#CCCCCC"
      return { ...provided, color };
    }
  });
  
  render() {
    const { selectedOption } = this.state;
    const selectProduct = 'Product Name'

    return (
      <div className="App">
        <div className="Select">
          <label>Product</label>
          <Select value={selectedOption} onChange={this.handleChange} options={product} placeholder={selectProduct} styles={this.customStyles(selectedOption)}/>
        </div>
        <div >
          <label>Price</label>
          <div id="Color-Price" className="Price">
            {this.showInfo()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
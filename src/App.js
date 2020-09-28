import React, { Component } from 'react';
import ProductOrder from './components/ProductOrder';

import './assets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProductOrder />
      </div>
    );
  }
}

export default App;
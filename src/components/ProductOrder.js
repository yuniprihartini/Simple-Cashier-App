import React, { Component } from 'react';

import '../assets/ProductOrder.css'
import Price from './Price';
import ProductSelected from './ProductSelected';

class ProductOrder extends Component {
    // state for selectedOption 
    state = {
        selectedOption: null
    }

    // handleChange to select every option
    productHandleChange = selectedOption => {
        this.setState({ selectedOption })
    }
    render() {
        // this.state.selectedOption
        const { selectedOption } = this.state
        return (
            <div className="Product-Order">
                <ProductSelected
                    selectedOption={selectedOption}
                    productHandleChange={this.productHandleChange} />
                <Price
                    selectedOption={selectedOption} />
            </div>
        );
    }
}

export default ProductOrder;
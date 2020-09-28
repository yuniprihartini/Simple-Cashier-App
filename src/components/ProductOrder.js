import React, { Component } from 'react';

import '../assets/ProductOrder.css'
import Price from './Price';
import ProductSelected from './ProductSelected';
import Quantity from './Quantity';

class ProductOrder extends Component {
    // state for selectedOption 
    state = {
        selectedOption: null,
        quantity: 0,
        disable: true
    }

    // handleChange to select every option
    productHandleChange = selectedOption => {
        this.setState({ selectedOption })
    }

    addProductQuantity = () => {
        this.setState({ quantity: this.state.quantity + 1, disable: false })
    }
    reduceProductQuantity = () => {
        let quantity = this.state.quantity
        if (quantity <= 0) {
            this.setState({ disable: true })
        } else {
            this.setState({ quantity: quantity - 1, disable: false })
        }
    }

    render() {
        // this.state.selectedOption
        const { selectedOption, quantity, disable } = this.state
        return (
            <div className="Product-Order">
                <ProductSelected
                    selectedOption={selectedOption}
                    productHandleChange={this.productHandleChange} />
                <Price
                    selectedOption={selectedOption} />
                <Quantity
                    quantity={quantity}
                    addProductQuantity={this.addProductQuantity}
                    reduceProductQuantity={this.reduceProductQuantity}
                    disable={disable} />
            </div>
        );
    }
}

export default ProductOrder;
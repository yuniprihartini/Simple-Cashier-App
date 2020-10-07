import React, { Component } from 'react';

import Price from './Price';
import ProductSelected from './ProductSelected';
import Quantity from './Quantity';
import Total from './Total';

import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/ProductOrder.css'

class ProductOrder extends Component {
    state = {
        selectedOption: null,
        quantity: 0,
        total: 0,
        disable: true
    }

    // handleChange to select every option
    productHandleChange = selectedOption => {
        this.setState({ selectedOption })
    }

    // function to add quantity
    addProductQuantity = () => {
        this.setState({ quantity: this.state.quantity + 1, disable: false })
    }

    // function to reduce quantity
    reduceProductQuantity = () => {
        let quantity = this.state.quantity
        if (quantity <= 0) {
            this.setState({ disable: true })
        } else {
            this.setState({ quantity: quantity - 1, disable: false })
        }
    }

    render() {
        const { selectedOption, quantity, total, disable } = this.state
        return (
            <div className="Product">
                <button id="Add-Item" type="button" class="btn btn-primary" ><i class="fa fa-plus fa-sm" ></i> Add item</button>
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
                    <Total
                        selectedOption={selectedOption}
                        quantity={quantity}
                        total={total} />
                    <button id="Remove-Item" type="button" class="btn btn-danger"><i class="fa fa-trash fa-sm" ></i></button>
                </div>
            </div>
        );
    }
}

export default ProductOrder;
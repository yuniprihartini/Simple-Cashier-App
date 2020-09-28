import React from 'react';
import Select from 'react-select';

import { product } from '../data/Product';

import '../assets/ProductSelected.css'

const ProductSelected = (props) => {
    const selectedOption = props.selectedOption
    const productHandleChange = props.productHandleChange
    const selectProduct = 'Product Name'

    return (
        <div className="Select">
            <label>Product</label>
            <Select
                value={selectedOption}
                onChange={productHandleChange}
                options={product}
                placeholder={selectProduct} />
        </div>
    );
};

export default ProductSelected;
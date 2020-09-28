import React from 'react';
import NumberFormat from 'react-number-format';

import '../assets/Price.css'

const Price = (props) => {
    const selectedOption = props.selectedOption
    const productHandleChange = props.productHandleChange

    const getPrice = () => {
        const initialPrice = 0

        if (selectedOption !== null) {
            return (
                <div>
                    <NumberFormat
                        value={selectedOption.value}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'Rp'}
                    />
                </div>
            )
        } else {
            return (
                <div>
                    <NumberFormat
                        value={initialPrice}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'Rp'} />
                </div>
            )
        }
    }

    return (
        <div>
            <label>Price</label>
            <div className="Price">
                {getPrice()}
            </div>
        </div>
    );
};

export default Price;
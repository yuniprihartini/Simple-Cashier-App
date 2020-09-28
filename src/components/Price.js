import React from 'react';
import NumberFormat from 'react-number-format';

import '../assets/Price.css'

const Price = (props) => {
    const selectedOption = props.selectedOption

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
        <div className="Price">
            <label>Price</label>
            <div className="Get-Price">
                {getPrice()}
            </div>
        </div>
    );
};

export default Price;
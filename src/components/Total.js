import React from 'react';
import NumberFormat from 'react-number-format';

import '../assets/Total.css'

const Total = (props) => {
    const selectedOption = props.selectedOption
    const quantity = props.quantity
    let total = props.total

    const getTotal = () => {
        if (selectedOption !== null) {
            total = quantity * selectedOption.value
            return (
                <div>
                    <NumberFormat
                        value={total}
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
                        value={total}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'Rp'}
                    />
                </div>
            )
        }
    }
    return (
        <div className="Total">
            <label>Total</label>
            <div className="Get-Total">
                {getTotal()}
            </div>
        </div>
    );
};

export default Total;
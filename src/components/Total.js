import React from 'react';
import NumberFormat from 'react-number-format';

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
        <div>
            {getTotal()}
        </div>
    );
};

export default Total;
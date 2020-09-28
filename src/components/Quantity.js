import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/fontawesome/css/all.css'
import '../assets/Quantity.css'

const Quantity = (props) => {
    const quantity = props.quantity
    const add = props.addProductQuantity
    const reduce = props.reduceProductQuantity
    const disable = props.disable

    return (
        <div className="Quantity">
            <label>Quantity</label>
            <div className="Counter">
                <i id="Reduce" class="fa fa-minus fa-sm" type="button" onClick={reduce} disabled={disable}></i>
                <p className="Change">{quantity}</p>
                <i id="Add" class="fa fa-plus fa-sm" type="button" onClick={add}></i>
            </div>
        </div >
    );
};

export default Quantity;
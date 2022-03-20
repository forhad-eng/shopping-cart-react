import React from 'react'
import './Subtotal.css'

const Subtotal = ({ price }) => {
    const tax = price * 0.2
    return (
        <div className="subtotal">
            <span>
                <h4>Subtoal:</h4>
                <h4>Tax(20%):</h4>
                <h4>Total:</h4>
            </span>
            <span className="price-section">
                <h4>${price.toFixed(2)}</h4>
                <h4>${tax.toFixed(2)}</h4>
                <h4>${(price + tax).toFixed(2)}</h4>
            </span>
        </div>
    )
}

export default Subtotal

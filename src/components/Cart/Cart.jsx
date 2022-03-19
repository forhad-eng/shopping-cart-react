import React, { useState } from 'react'
import './Cart.css'

const Cart = ({ image, price, name }) => {
    const [count, setCount] = useState(1)
    return (
        <div className="cart">
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img width={150} src={image} alt="" />
                <h3>{name}</h3>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                <button onClick={() => count > 1 && setCount(count - 1)}>-</button>
                <h3>Count: {count}</h3>
                <button onClick={() => setCount(count + 1)}>+</button>
                <h4>
                    Price: $<span className="price">{price * count}</span>
                </h4>
            </div>
        </div>
    )
}

export default Cart

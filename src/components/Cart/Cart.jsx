import React from 'react'
import './Cart.css'

const Cart = ({ image, price, name, count, setPhoneCount, setCaseCount }) => {
    const increaseHandle = () => {
        setPhoneCount ? setPhoneCount(count + 1) : setCaseCount(count + 1)
    }
    const decreaseHandle = () => {
        count > 1 && setPhoneCount ? setPhoneCount(count - 1) : setCaseCount(count - 1)
    }
    return (
        <div className="cart">
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img width={150} src={image} alt="" />
                <h3>{name}</h3>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                <button onClick={decreaseHandle}>-</button>
                <h3>Count: {count}</h3>
                <button onClick={increaseHandle}>+</button>
                <h3>
                    Price: $<span className="price">{price * count}</span>
                </h3>
            </div>
        </div>
    )
}

export default Cart

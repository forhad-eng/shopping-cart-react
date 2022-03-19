import React from 'react'
import Cart from './components/Cart/Cart'
import Subtotal from './components/Subtotal/Subtotal'

const App = () => {
    return (
        <>
            <h2>Shopping Cart</h2>
            <Cart name="iPhone 12 Pro Max" image="product-1.png" price={1219}></Cart>
            <Cart name="iPhone 12 Pro Case" image="product-2.png" price={59}></Cart>
            <Subtotal></Subtotal>
        </>
    )
}

export default App

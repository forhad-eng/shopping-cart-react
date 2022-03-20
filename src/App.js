import React, { useEffect, useState } from 'react'
import Cart from './components/Cart/Cart'
import Subtotal from './components/Subtotal/Subtotal'

const App = () => {
    const [phoneCount, setPhoneCount] = useState(1)
    const [caseCount, setCaseCount] = useState(1)
    const [price, setPrice] = useState(0)
    useEffect(() => {
        let total = 0
        const prices = document.getElementsByClassName('price')
        for (const price of prices) {
            total += parseInt(price.innerText)
        }
        setPrice(total)
    }, [phoneCount, caseCount])
    return (
        <>
            <h2 style={{ marginLeft: '25px' }}>Shopping Cart</h2>
            <Cart
                name="iPhone 12 Pro Max"
                image="product-1.png"
                price={1219}
                count={phoneCount}
                setPhoneCount={setPhoneCount}
            ></Cart>
            <Cart
                name="iPhone 12 Pro Case"
                image="product-2.png"
                price={59}
                count={caseCount}
                setCaseCount={setCaseCount}
            ></Cart>
            <Subtotal price={price}></Subtotal>
        </>
    )
}

export default App

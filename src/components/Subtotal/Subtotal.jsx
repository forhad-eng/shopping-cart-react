import React from 'react'

const Subtotal = () => {
    const prices = document.getElementsByClassName('price')
    let sum = 0
    for (const price of prices) {
        sum = sum + parseInt(price.innerText)
    }
    return (
        <div>
            <h3>Total: {sum}</h3>
        </div>
    )
}

export default Subtotal

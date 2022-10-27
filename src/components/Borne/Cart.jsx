import React from 'react'

const Cart = ({ cartMeal }) => {
    const totalCart = () => {
        let total = 0
        cartMeal.forEach(element => {
            total += element.price
        })
        return total
    }
    return (
        <div>
            <h3>Cart</h3>
            {
                cartMeal.map((item, i) => (
                    <p key={i}>{item.titre} - {item.price} </p>
                ))
            }
            <div> {totalCart()} </div>
        </div>
    )
}

export default Cart
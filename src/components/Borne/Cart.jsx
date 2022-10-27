import React, { useState } from 'react'

const Cart = ({ cartMeal }) => {
    const [toogle, setToogle] = useState(false)
    const totalCart = () => {
        let total = 0
        cartMeal.forEach(element => {
            total += element.price
        })
        return total
    }
    return (
        <div className='cartContainer'>
            <button onClick={() => setToogle(!toogle)}>Panier</button>
            {
                toogle &&
                cartMeal.map((item, i) => (
                    <p key={i}>{item.titre} - {item.price}€ </p>
                ))
            }
            {toogle &&
                <div> {totalCart()} </div>
            }
        </div>
    )
}

export default Cart
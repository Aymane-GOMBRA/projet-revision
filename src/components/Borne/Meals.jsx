import React from 'react'
import Meal from './Meal'

const Meals = ({ repas, setCartMeal, cartMeal }) => {
    return (
        <div>
            <h2>Liste repas</h2>
            {
                repas.map((plat, index) => (
                    <Meal key={index} plat={plat} setCartMeal={setCartMeal} cartMeal={cartMeal} />
                ))
            }

        </div>
    )
}

export default Meals
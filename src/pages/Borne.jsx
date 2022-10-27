import React, { useState } from 'react'
import Cart from '../components/Borne/Cart'
import Meals from '../components/Borne/Meals'
import { MealsContext } from '../context/MealContext'

const Borne = () => {
    const [repas, setRepas] = useState([
        { titre: 'repas1', price: 11, link: 'src/assets/img3.jpg' },
        { titre: 'repas2', price: 12, link: 'src/assets/img3.jpg' },
        { titre: 'repas3', price: 13, link: 'src/assets/img3.jpg' },
        { titre: 'repas4', price: 14, link: 'src/assets/img3.jpg' },
        { titre: 'repas5', price: 15, link: 'src/assets/img3.jpg' },
        { titre: 'repas6', price: 16, link: 'src/assets/img3.jpg' }
    ])
    const [cartMeal, setCartMeal] = useState([])


    return (
        <MealsContext.Provider
            value={{
                setCartMeal,
                cartMeal
            }}>
            <div>
                <h1>Borne</h1>
                <Meals repas={repas} />
                <Cart cartMeal={cartMeal} />
            </div>
        </MealsContext.Provider>
    )
}

export default Borne
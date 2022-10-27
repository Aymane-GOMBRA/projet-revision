import React, { useContext } from 'react'
import { MealsContext } from '../../context/MealContext'

const Meal = ({ plat, index }) => {
    const { setCartMeal, cartMeal } = useContext(MealsContext)
    return (
        <div className='meal'>
            <p key={index}> {plat.titre} </p>
            <img width={'200px'} src={plat.link} alt="" />
            <p> {plat.price}€ </p>
            <button onClick={() => setCartMeal([...cartMeal, plat])}>+</button>
        </div>
    )
}

export default Meal
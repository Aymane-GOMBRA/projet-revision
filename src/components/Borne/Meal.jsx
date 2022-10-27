import React, { useContext } from 'react'
import { MealsContext } from '../../context/MealContext'
import './borne.css'

const Meal = ({ plat, index }) => {
    const { setCartMeal, cartMeal } = useContext(MealsContext)
    return (
        <div className='meal'>
            <div><img width={'200px'} src={plat.link} alt="" /></div>
            <div>{plat.titre}</div>
            <div>{plat.price}€</div>
            <div><button onClick={() => setCartMeal([...cartMeal, plat])}>+</button></div>
        </div>
    )
}

export default Meal
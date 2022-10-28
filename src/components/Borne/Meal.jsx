import React, { useContext } from 'react'
import { MealsContext } from '../../context/MealContext'
import './borne.css'

const Meal = ({ plat, index }) => {
    const { setCartMeal, cartMeal } = useContext(MealsContext)
    return (
        <div className='meal'>
            <div className='cardImage'><img src={plat.link} alt="" /></div>
            <div className='cardBody'>
                <div className='cardTitle'><h3>{plat.titre}</h3></div>
                <div className='cardPrice'>{plat.price}€</div>
                <div className='cardBtn'><button onClick={() => setCartMeal([...cartMeal, plat])}>+</button></div>
            </div>

        </div>
    )
}

export default Meal
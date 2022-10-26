import React, { useEffect, useState } from 'react'
import './Movie.css'

const Movie = ({ title, year, index, handleClickDelete }) => {
    const [bgColor, setbgColor] = useState('');
    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * max - min + min)
    }
    const randomColor = () => {
        const color1 = randomNumber(0, 255)
        const color2 = randomNumber(0, 255)
        const color3 = randomNumber(0, 255)
        return `rgba(${color1}, ${color2}, ${color3})`
    }
    const backgroundColor = () => {
        setbgColor({ background: randomColor() })
    }

    return (

        <div className='movies'>
            {title} {year} <br />
            {
                <div>
                    <button onClick={backgroundColor}>Change Color</button>
                    <button onClick={(e) => { handleClickDelete(index) }}>delete</button>
                </div>

            }
        </div >
    )
}

export default Movie
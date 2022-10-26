import React, { useEffect, useState } from 'react'
import { randomColor } from '../../utils/random';

const Movie = ({ film, index, handleClickDelete, addDeleteMovie }) => {
    const [bgColor, setbgColor] = useState('');


    useEffect(() => {
        return () => {
            addDeleteMovie()
        }
    })
    const backgroundColor = () => {
        setbgColor(randomColor())
    }

    return (

        <div style={{
            backgroundColor: bgColor,
            width: "200px",
            margin: "10px",
            padding: "10px",
            border: "solid 1px black"
        }}>
            {film.title} {film.year} <br />
            {
                <div>
                    <button onClick={backgroundColor}>Change Color</button>
                    <button onClick={() => { handleClickDelete(index) }}>delete</button>
                </div>

            }
        </div >
    )
}

export default Movie
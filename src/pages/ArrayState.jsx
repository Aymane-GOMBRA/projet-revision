import React, { useState } from 'react';

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * max - min + min)
}
const randomColor = () => {
    const color1 = randomNumber(0, 255)
    const color2 = randomNumber(0, 255)
    const color3 = randomNumber(0, 255)
    return `rgba(${color1}, ${color2}, ${color3})`
}
const ArrayState = () => {
    const [rectangles, setRectangles] = useState([])
    const [inputNumber, setInputNumber] = useState("")

    const handleSubmit = e => {
        e.preventDefault()

        const rect = []
        for (let i = 0; i < inputNumber; i++) {
            rect.push({
                background: randomColor(),
                width: randomNumber(100, 200) + "px",
                height: randomNumber(100, 200) + "px",
            })
        }
        setRectangles(rect)
    }

    return (
        <div>
            <h1>Rectangle</h1>
            <p>Genere un nombre de rectangle indiquer avec dimension et couleur random</p>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setInputNumber(e.target.value)} value={inputNumber} type="text" />
                <button type="submit">Valider</button>
            </form>
            {
                rectangles.map((rectangle, index) => (
                    <div key={index} style={rectangle}></div>
                ))
            }
        </div>
    )
}
export default ArrayState
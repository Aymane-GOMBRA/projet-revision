import React, { useEffect, useState } from 'react'
import { randomNumber } from '../../utils/random'

const DisplayConverter = ({ value, setValue }) => {
    const [fontSize, setFontSize] = useState()

    useEffect(() => {
        setFontSize(randomNumber(15, 25))
    }, [value])



    return (
        <div>
            {
                value &&
                <div style={{
                    fontSize: fontSize + 'px'
                }}>{value}€ = {value * 0.00005}BTC <br /></div>
            }

            <button onClick={() => setValue(null)}>reset</button>
        </div>
    )
}

export default DisplayConverter
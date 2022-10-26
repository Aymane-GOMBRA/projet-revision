import React, { useState } from 'react'
import DisplayConverter from '../components/Converter/DisplayConverter'
import FormConverter from '../components/Converter/FormConverter'

const Converter = () => {
    const [moneys, setMoney] = useState([])
    return (
        <div>
            <h1>Converter</h1>
            <FormConverter moneys={moneys} setMoney={setMoney} />
            <DisplayConverter moneys={moneys} />
        </div>
    )
}

export default Converter
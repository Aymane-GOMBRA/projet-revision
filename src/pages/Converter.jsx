import React, { useState } from 'react'
import DisplayConverter from '../components/Converter/DisplayConverter'
import FormConverter from '../components/Converter/FormConverter'

const Converter = () => {
    const [value, setValue] = useState()
    return (
        <div>
            <h1>Converter</h1>
            <FormConverter setValue={setValue} />
            <DisplayConverter value={value} setValue={setValue} />
        </div>
    )
}

export default Converter
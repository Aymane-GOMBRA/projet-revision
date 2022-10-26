import React, { useState } from 'react'

const FormConverter = ({ value, setValue }) => {
    const [inputEur, setInputEur] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        setInputEur(e.target[0].value)
        setValue(parseFloat(inputEur))
        setInputEur('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={e => setInputEur(e.target.value)} value={inputEur} type="number" />
            <button type="submit">Convertir</button>
        </form>
    )
}

export default FormConverter
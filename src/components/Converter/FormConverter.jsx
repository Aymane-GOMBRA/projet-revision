import React, { useState } from 'react'

const FormConverter = ({ moneys, setMoney }) => {
    const [inputMoney, setInputMoney] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        setInputMoney(e.target[0].value)
        setMoney([...moneys, (inputMoney) + 1])
    }
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={e => setInputMoney(e.target.value)} value={inputMoney} type="number" />
            <button type="submit">Valider</button>
        </form>
    )
}

export default FormConverter
import React, { useState } from 'react'

const FormStateUp = ({ names, setNames }) => {
    const [inputName, setInputName] = useState('')


    const handleSubmit = e => {
        e.preventDefault()
        setNames([...names, inputName])
        // setNames(oldState => [...oldState, inputName]) si on importe pas names on utilise ca 
        setInputName('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={e => setInputName(e.target.value)} value={inputName} type="text" />
            <button type="submit">Ajouter</button>
        </form>
    )
}

export default FormStateUp
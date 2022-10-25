import React, { useState } from 'react'

const Users = () => {
    const [users, setUsers] = useState([])
    const [inputName, setInputName] = useState("")
    const [inputAge, setInputAge] = useState("")
    const [inputNameEdit, setInputNameEdit] = useState("")
    const [inputAgeEdit, setInputAgeEdit] = useState("")
    const handleSubmit = e => {
        e.preventDefault()
        setUsers([...users, [inputName, inputAge]]);
        setInputName('');
        setInputAge('');
    }
    const handleSubmitEdit = e => {
        e.preventDefault()
        const newState = [...users]
        newState.splice(e, 1, [inputNameEdit, inputAgeEdit]);
        setUsers(newState)
        setInputNameEdit('');
        setInputAgeEdit('');
    }

    const handleClickDelete = (e) => {
        const newState = [...users]
        newState.splice(e, 1)
        setUsers(newState)
    }
    const handleClickEdit = (e) => {
        const newState = [...users]
        console.log(newState[e.index][0])
        console.log(newState[e.index][1])
        setInputNameEdit(newState[e.index][0])
        setInputAgeEdit(newState[e.index][1])
    }
    return (
        <div>
            <h1>Users</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder='firstname' onChange={(e) => setInputName(e.target.value)} value={inputName} type="text" />
                <input placeholder='age' onChange={(e) => setInputAge(e.target.value)} value={inputAge} type="number" />
                <button type="submit">Valider</button>
            </form>
            <ul>
                {
                    users.map((user, index) =>
                        <li key={index}>
                            {user[0]} {user[1]}ans
                            <button onClick={(e) => { handleClickEdit({ index }) }}>edit</button>
                            <button onClick={(e) => { handleClickDelete({ index }) }}>delete</button>
                        </li>
                    )
                }
            </ul>
            <div>
                <h2>Edit</h2>
                <form onSubmit={handleSubmitEdit}>
                    <input placeholder='firstname' onChange={(e) => setInputNameEdit(e.target.value)} value={inputNameEdit} type="text" />
                    <input placeholder='age' onChange={(e) => setInputAgeEdit(e.target.value)} value={inputAgeEdit} type="number" />
                    <button type="submit">editer</button>
                </form>
            </div>


        </div>
    )
}
export default Users

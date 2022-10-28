import React, { useContext } from 'react'
import { useStudents } from '../../context/StudentContext'

const Student = ({ student, index }) => {
    const { setStudents, students } = useStudents()
    const handleClick = () => {
        const newArray = [...students]
        newArray.splice(index, 1)
        setStudents(newArray)
    }
    return (
        <div>
            {student.lastname} {student.firstname}
            <button onClick={handleClick}>X</button>
        </div>
    )
}

export default Student
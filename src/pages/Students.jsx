import React, { useState } from 'react'
import StudentsList from '../components/Students/StudentsList'
import { StudentsContext } from '../context/StudentContext'

const Students = () => {
    const [students, setStudents] = useState([
        {
            lastname: "Mavracic",
            firstname: "Jonathan",
            age: 32,
        },
        {
            lastname: "Mavracic",
            firstname: "Eliott",
            age: 5,
        },
        {
            lastname: "Mavracic",
            firstname: "Joseph",
            age: 7,
        },
    ])
    return (
        <StudentsContext.Provider
            value={{
                setStudents,
                students
            }}>
            <div>
                <h1>Student</h1>
                <StudentsList students={students} />
            </div>
        </StudentsContext.Provider>
    )
}

export default Students
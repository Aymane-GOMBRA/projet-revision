import React, { useState } from 'react'
import StudentsList from '../components/Students/StudentsList'
import { StudentsProvider } from '../context/StudentContext'

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
        <StudentsProvider
            initialValue={{
                setStudents,
                students
            }}>
            <div>
                <h1>Student</h1>
                <StudentsList students={students} />
            </div>
        </StudentsProvider>
    )
}

export default Students
import React from 'react'
import Student from './Student'


const StudentsList = ({ students }) => {
    return (
        <div>
            {
                students.map((student, i) => (
                    <Student key={i} student={student} index={i} />
                ))
            }
        </div>
    )
}

export default StudentsList
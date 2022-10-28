import React, { useContext, useState } from 'react';

export const StudentsContext = React.createContext()

export const StudentsProvider = ({ initialValue, children }) => {
    const [order, setOrder] = useState('age')

    const updateList = () => {

    }

    return (
        <StudentsContext.Provider
            value={{
                ...initialValue,
                order,
                setOrder,
                updateList
            }}
        >
            {children}
        </StudentsContext.Provider>
    )
}

export const useStudents = () => {
    const context = useContext(StudentsContext)
    return context
}
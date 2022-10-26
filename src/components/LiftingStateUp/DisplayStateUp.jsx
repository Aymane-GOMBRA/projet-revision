import React from 'react'

const DisplayStateUp = ({ names }) => {
    return (
        <div>
            {
                names.map((name, i) => (
                    <div key={i}>
                        {name}
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayStateUp
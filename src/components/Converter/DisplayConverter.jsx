import React from 'react'

const DisplayConverter = ({ moneys }) => {
    return (
        <div>
            {
                moneys.map((teest, i) => (
                    <div key={i}>
                        {teest}
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayConverter
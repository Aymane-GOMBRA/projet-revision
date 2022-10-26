import React, { useState } from 'react'
import FormStateUp from '../components/LiftingStateUp/FormStateUp'
import DisplayStateUp from '../components/LiftingStateUp/DisplayStateUp'

const LiftingStateUp = () => {
    const [names, setNames] = useState([])

    return (
        <div>
            <h1>LiftingStateUp</h1>
            <FormStateUp names={names} setNames={setNames} />
            <DisplayStateUp names={names} />
        </div>
    )
}

export default LiftingStateUp
import React, { useEffect, useState } from 'react'
import "./Animal.css"

const Animal = ({ name, quantity, index, animalsDelete, animalsQuantityAdd, animalsQuantityRemove }) => {
    const [toogle, setToogle] = useState(false)

    useEffect(() => {
        console.log('Composant instancié')
        return () => {
            console.log('composant détruit');
        }
    }, [])

    useEffect(() => {
        console.log('Composant update')
    })

    useEffect(() => {
        console.log(name + ' toogle ou name modifier');
    }, [toogle, name])

    return (
        <div className='animal'>
            {name} <br />
            {quantity} <br />

            <button onClick={() => setToogle(!toogle)}>Edit</button>
            {
                // toogle === true ?
                //     <div>
                //         <button>delete</button>
                //     </div>
                //     : null


                //if toogle===true alors sinon rien
                toogle &&
                <div>
                    <button onClick={() => { animalsDelete(index), setToogle(!toogle) }}>X</button>
                    <button onClick={() => animalsQuantityAdd(index)}>+1</button>
                    <button onClick={() => animalsQuantityRemove(index)}>-1</button>
                </div>
            }
        </div>
    )
}

export default Animal
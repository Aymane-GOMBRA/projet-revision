import React, { useEffect, useState } from 'react'

const Dog = () => {
    const [toogle, setToogle] = useState(false)
    const [urlImage, setUrlImage] = useState()

    useEffect(() => {
        fetch('https://random.dog/woof.json',
            {
                method: 'GET'
            }
        )
            .then(res => res.json())
            .then(data => {
                setUrlImage(data.url);
            })
    }, [])
    return (
        <div>
            <h1>Dog</h1>
            {
                urlImage &&
                <img src={urlImage} alt="" style={{ width: "300px" }} />
            }
            <button onClick={() => setToogle(!toogle)}>Affiché</button>
            {
                toogle &&
                <p>Affiché !</p>
            }
        </div>
    )
}

export default Dog
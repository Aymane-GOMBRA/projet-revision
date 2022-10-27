import React, { useState } from 'react'
import Thumbnails from '../components/Slider/Thumbnails'
import View from '../components/Slider/View'

const Slider = () => {
    const [pictures, setPictures] = useState([
        { link: 'src/assets/img3.jpg' },
        { link: 'src/assets/img5.jpg' },
        { link: 'src/assets/img6.jpg' },
        { link: 'src/assets/img4.jpg' },
        { link: 'src/assets/img3.jpg' },
    ])
    const [selectPic, setSelectPic] = useState(0)

    return (
        <div style={{
            textAlign: 'center'
        }}>
            <h1>Slider</h1>
            <View selectPic={selectPic} pictures={pictures} setSelectPic={setSelectPic} />
            <Thumbnails pictures={pictures} selectPic={selectPic} setSelectPic={setSelectPic} />

        </div>
    )
}

export default Slider
import React, { useState } from 'react'
import Thumbnails from '../components/Slider/Thumbnails'
import View from '../components/Slider/View'

const Slider = () => {
    const [pictures, setPictures] = useState([
        { link: 'src/assets/img3.jpg', style: { width: '120px', margin: '5px' } },
        { link: 'src/assets/img5.jpg', style: { width: '120px', margin: '5px' } },
        { link: 'src/assets/img6.jpg', style: { width: '120px', margin: '5px' } },
        { link: 'src/assets/img4.jpg', style: { width: '120px', margin: '5px' } },
        { link: 'src/assets/img3.jpg', style: { width: '120px', margin: '5px' } },
    ])
    const [selectPic, setSelectPic] = useState('')

    const getView = (i) => {
        console.log()

    }

    return (
        <div style={{
            textAlign: 'center'
        }}>
            <h1>Slider</h1>
            <View selectPic={selectPic} pictures={pictures} />
            <Thumbnails pictures={pictures} setSelectPic={setSelectPic} />

        </div>
    )
}

export default Slider
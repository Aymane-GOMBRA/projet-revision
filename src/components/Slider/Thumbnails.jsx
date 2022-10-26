import React from 'react'

const Thumbnails = ({ pictures, setSelectPic }) => {

    return (
        <div className='containerThumbnails'>
            {
                pictures.map((pic, i) => (
                    <img key={i} onClick={(e) => setSelectPic(i)} style={pic.style} src={pic.link} />
                ))
            }
        </div>
    )
}

export default Thumbnails
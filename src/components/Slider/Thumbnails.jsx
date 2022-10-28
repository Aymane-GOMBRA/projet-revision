import React from 'react'

const Thumbnails = ({ pictures, setSelectPic, selectPic }) => {
    return (
        <div className='containerThumbnails'>
            {
                pictures.map((pic, i) => (
                    <img draggable="false" key={i} onClick={(e) => { setSelectPic(i) }} style={i === selectPic ? { width: '120px', margin: '5px', border: 'solid 5px black' } : { width: '120px', margin: '5px' }} src={pic.link} />
                ))
            }
        </div>
    )
}

export default Thumbnails
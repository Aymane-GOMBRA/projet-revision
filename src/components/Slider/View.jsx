import React from 'react'

const View = ({ selectPic, pictures, setSelectPic }) => {
    return (
        <div className='containerView'>
            <button>left</button>
            <img draggable="false" src={pictures[selectPic].link} />
            <button>right</button>
        </div>
    )
}

export default View
import React from 'react'

const View = ({ selectPic, pictures }) => {
    const test = 1;
    return (
        <div className='containerView'>
            <button>left</button>
            <img src={pictures[test].link} />
            <button>right</button>
            <p>{selectPic}</p>
        </div>
    )
}

export default View
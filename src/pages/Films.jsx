import React, { useEffect, useState } from 'react'
import Movie from '../components/Movie/Movie'

const Films = () => {
    const [films, setFilms] = useState([
        { title: 'Film1', year: 2001 },
        { title: 'Film2', year: 2002 },
        { title: 'Film3', year: 2003 },
        { title: 'Film4', year: 2004 },
        { title: 'Film5', year: 2005 }
    ])
    const [inputTitle, setInputTitle] = useState('')
    const [inputYear, setInputYear] = useState('')
    const handleSubmit = e => {
        e.preventDefault()
        setFilms([...films, {
            title: inputTitle,
            year: inputYear
        }]);
        setInputTitle('');
        setInputYear('');
    }

    const handleClickDelete = (index) => {
        const newState = [...films]
        newState.splice(index, 1)
        setFilms(newState)

    }


    return (
        <div>
            <h1>Films</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder='Title' onChange={(e) => setInputTitle(e.target.value)} value={inputTitle} type="text" />
                <input placeholder='Year' onChange={(e) => setInputYear(e.target.value)} value={inputYear} type="number" />
                <button type="submit">Valider</button>
            </form>
            {
                films.map((film, index) => (
                    <Movie
                        key={index}
                        title={film.title}
                        year={film.year}
                        index={index}
                        handleClickDelete={handleClickDelete}
                    />
                ))

            }
        </div>
    )
}

export default Films
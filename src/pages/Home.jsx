import React, { useState } from 'react';

const Home = () => {
  const [tasks, setTasks] = useState([])
  const [inputTask, setInputTask] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    setTasks([...tasks, inputTask]);
    setInputTask('');
  }
  const handleClick = (e) => {
    const newState = [...tasks]
    newState.splice(e, 1)
    setTasks(newState)
  }
  return (
    <div>
      <h1>To-do List</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={e => setInputTask(e.target.value)} value={inputTask} type="text" />
        <button type="submit">Ajouter une tâche</button>
      </form>
      <ul>
        {
          tasks.map((task, index) =>
            <li key={index}>
              {task}
              <button onClick={(e) => { handleClick({ index }) }}>x</button>
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default Home
import React, { useState } from 'react';

const Home = () => {
  const [tasks, setTasks] = useState([])
  const [inputTask, setInputTask] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    console.log('Form envoyé')
  }
  return (
    <div>
      <h1>Etats test</h1>

      <form onSubmit={handleSubmit}>
        <input onChange={e => setInputTask(e.target.value)} value={inputTask} type="text" />
        <button type="submit">Ajouter une tâche</button>
      </form>
    </div>
  )
}

export default Home
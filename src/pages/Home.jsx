import React, { useState } from 'react';

const Home = () => {
  const [squares, setSquares] = useState(50)
  return (
    <div>
      <h1>Etats</h1>
      <h2>{squares}</h2>

      <button onClick={() => { setSquares(150) }}>Modifier</button>
    </div>
  )
}

export default Home
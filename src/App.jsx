import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import ArrayState from './pages/ArrayState'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/array" element={<ArrayState />} />
      </Routes>
    </>
    
  )
}

export default App

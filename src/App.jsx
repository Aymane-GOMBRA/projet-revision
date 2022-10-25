import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import ArrayState from './pages/ArrayState'
import Home from './pages/Home'
import Users from './pages/Users'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/array" element={<ArrayState />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>

  )
}

export default App

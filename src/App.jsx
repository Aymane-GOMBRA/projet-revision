import { Routes, Route } from 'react-router-dom'
import ArrayState from './pages/ArrayState'
import Home from './pages/Home'
import LifeCycles from './pages/LifeCycles'
import Users from './pages/Users'
import Navbar from './components/Navbar/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/array" element={<ArrayState />} />
        <Route path="/users" element={<Users />} />
        <Route path='/cycles' element={<LifeCycles />} />
      </Routes>
    </>

  )
}

export default App

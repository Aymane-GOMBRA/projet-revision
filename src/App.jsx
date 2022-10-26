import { Routes, Route } from 'react-router-dom'
import ArrayState from './pages/ArrayState'
import Home from './pages/Home'
import LifeCycles from './pages/LifeCycles'
import Users from './pages/Users'
import Navbar from './components/Navbar/Navbar';
import Films from './pages/Films'
import LiftingStateUp from './pages/LiftingStateUp'
import Converter from './pages/Converter'
import Slider from './pages/Slider'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/array" element={<ArrayState />} />
        <Route path="/users" element={<Users />} />
        <Route path='/cycles' element={<LifeCycles />} />
        <Route path='/films' element={<Films />} />
        <Route path='/lifting' element={<LiftingStateUp />} />
        <Route path='/converter' element={<Converter />} />
        <Route path='/slider' element={<Slider />} />
      </Routes>
    </>

  )
}


export default App

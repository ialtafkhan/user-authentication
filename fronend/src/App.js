import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admin from './auth/Admin';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Users from './pages/Users';
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/' element={<Home />} />
        {/* admin only  */}
        <Route path='/admin/all-user' element={<Admin element={<Users />} />} />
        {/* admin only  */}

      </Routes>
    </BrowserRouter>

  )
}

export default App;

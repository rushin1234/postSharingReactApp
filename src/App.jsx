
//react-router
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

//pages
import Signin from './pages/signin'
import Dashboard from './pages/dashboard'

//css
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<Signin />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

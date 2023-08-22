import { Route, Routes } from 'react-router-dom'
import Start from './pages/Home/Start'
import Form from './pages/CreateProduct/Form'
import LoginPage from './pages/Login/LoginView'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/createproduct" element={<Form />} />
      </Routes>
    </div>
  )
}

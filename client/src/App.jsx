import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import ForgotPassword from "./pages/ForgotPassword"
import { Toaster } from 'react-hot-toast';
import VerifyEmail from "./pages/VerifyEmail"

export const url = "http://localhost:5000"
const App = () => {
  return (
    <BrowserRouter>
    <Toaster/>
    <div className="bg-primary text-[#404040]">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/verify-email" element={<VerifyEmail />} />
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
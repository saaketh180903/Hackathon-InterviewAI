import "./App.css"
// Redux
import { useDispatch, useSelector } from "react-redux"
// React Router
import { Route, Routes, useNavigate } from "react-router-dom"

// Components
import Navbar from "./components/common/Navbar"
import OpenRoute from "./components/core/auth/OpenRoute"
import PrivateRoute from "./components/core/auth/PrivateRoute"
// import Dashboard from "./pages/Dashboard"
// Pages
import Home from "./pages/Home"
import { ACCOUNT_TYPE } from "./utils/constants"

function App() {

  return (
    <div className="flex min-h-screen w-screen flex-col bg-blue-200 font-inter">
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
      
    </div>
  )
}

export default App
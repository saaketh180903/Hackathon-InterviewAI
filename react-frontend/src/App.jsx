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
import Permissions from "./pages/Permissions"
import Interview from "./pages/Interview"
import Error from "./pages/Error"
import { ACCOUNT_TYPE } from "./utils/constants"

function App() {

  return (
    <div className="flex min-h-screen w-full flex-col bg-gradient-to-b from-white to-[#ABBEFF] font-inter overflow-x-hidden">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/permissions" element={<Permissions />} />
          <Route path="/interview" element={<Interview />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>

  )
}

export default App
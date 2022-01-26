import { Routes, Route } from "react-router-dom"
import Auth from "./UI/views/pages/Auth/Auth"
import Dashboard from "./UI/views/pages/Dashboard/Dashboard"
import Profile from "./UI/views/pages/Profile/Profile"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}

export default App

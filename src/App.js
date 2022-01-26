import { Routes, Route } from 'react-router-dom'
import Auth from './ui/views/pages/Auth/Auth'
import Dashboard from './ui/views/pages/Dashboard/Dashboard'
import Profile from './ui/views/pages/Profile/Profile'

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

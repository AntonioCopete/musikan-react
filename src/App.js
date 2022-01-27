import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Auth from './ui/views/pages/Auth/Auth'
import Dashboard from './ui/views/pages/Dashboard/Dashboard'
import Profile from './ui/views/pages/Profile/Profile'
import { useDispatch } from 'react-redux'
import { onAuthStateChanged } from './services/auth'
import { syncSignIn, signOut } from './redux/auth/actions'

function App() {
  const [userName, setUserName] = useState()
  const dispatch = useDispatch()
  const data = { userName: userName }
  useEffect(() => {
    let unsubscribeFromAuth = null

    unsubscribeFromAuth = onAuthStateChanged((user) => {
      if (user) {
        dispatch(syncSignIn(data))
      } else {
        dispatch(signOut())
      }
    })

    return () => {
      if (unsubscribeFromAuth) {
        unsubscribeFromAuth()
      }
    }
  }, [dispatch])
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/auth" element={<Auth setUsername={setUserName} />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}

export default App

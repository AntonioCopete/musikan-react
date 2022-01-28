import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Auth from './ui/views/pages/Auth/Auth'
import Dashboard from './ui/views/pages/Dashboard/Dashboard'
import Profile from './ui/views/pages/Profile/Profile'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged } from './services/auth'
import { syncSignIn, signOut } from './redux/auth/actions'
import PrivateRoute from './ui/views/components/PrivateRoute/PrivateRoute'

function App() {
  const dispatch = useDispatch()
  const userName = useSelector((state) => state.user)

  useEffect(() => {
    let unsubscribeFromAuth = null
    const data = { userName: userName }

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
  }, [dispatch, userName])

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      ></Route>
      <Route path="/auth" element={<Auth />} />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
    </Routes>
  )
}

export default App

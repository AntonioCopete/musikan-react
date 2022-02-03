import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { syncSignIn, signOut } from './redux/auth/actions'
import { onAuthStateChanged } from './services/auth'
import { deleteUserName } from './redux/user/actions'

import PrivateRoute from './ui/views/components/PrivateRoute/PrivateRoute'
import Auth from './ui/views/pages/Auth/Auth'
import ResetPassword from './ui/views/pages/ResetPassword/ResetPassword'
import Dashboard from './ui/views/pages/Dashboard/Dashboard'
import Profile from './ui/views/pages/Profile/Profile'
import MySongs from './ui/views/pages/MySongs/MySongs'
import Favourites from './ui/views/pages/Favourites/Favourites'
import EditTrack from './ui/views/pages/EditTrack/EditTrack'

function App() {
  const dispatch = useDispatch()
  const userName = useSelector((state) => state.user)

  useEffect(() => {
    const data = { userName: userName }
    let unsubscribeFromAuth = null

    unsubscribeFromAuth = onAuthStateChanged((user) => {
      if (user) {
        dispatch(syncSignIn(data))
        dispatch(deleteUserName())
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
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route
        path="/my-songs"
        element={
          <PrivateRoute>
            <MySongs />
          </PrivateRoute>
        }
      />
      <Route
        path="/favourites"
        element={
          <PrivateRoute>
            <Favourites />
          </PrivateRoute>
        }
      />
      <Route
        path="/edit-song/:trackId"
        element={
          <PrivateRoute>
            <EditTrack />
          </PrivateRoute>
        }
      />
    </Routes>
  )
}

export default App

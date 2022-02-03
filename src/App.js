import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import * as ROUTES from './routes/routes'
import Auth from './ui/views/pages/Auth/Auth'
import ResetPassword from './ui/views/pages/ResetPassword/ResetPassword'
import Dashboard from './ui/views/pages/Dashboard/Dashboard'
import Profile from './ui/views/pages/Profile/Profile'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged } from './services/auth'
import { syncSignIn, signOut } from './redux/auth/actions'
import { deleteUserName } from './redux/user/actions'
import PrivateRoute from './ui/views/components/PrivateRoute/PrivateRoute'
import MySongs from './ui/views/pages/MySongs/MySongs'
import Favourites from './ui/views/pages/Favourites/Favourites'

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
      <Route path={ROUTES.AUTH} element={<Auth />} />
      <Route path={ROUTES.RESET_PASSWORD} element={<ResetPassword />} />
      <Route
        path={ROUTES.PROFILE}
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route
        path={ROUTES.MY_SONGS}
        element={
          <PrivateRoute>
            <MySongs />
          </PrivateRoute>
        }
      />
      <Route
        path={ROUTES.FAVOURITES}
        element={
          <PrivateRoute>
            <Favourites />
          </PrivateRoute>
        }
      />
    </Routes>
  )
}

export default App

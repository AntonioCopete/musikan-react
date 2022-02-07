import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { syncSignIn, signOut } from './redux/auth/actions'
import { onAuthStateChanged } from './services/auth'
import { deleteUserName } from './redux/user/actions'

import * as ROUTES from './routes/routes'
import PrivateRoute from './ui/views/components/PrivateRoute/PrivateRoute'
import Auth from './ui/views/pages/Auth/Auth'
import ResetPassword from './ui/views/pages/ResetPassword/ResetPassword'
import Dashboard from './ui/views/pages/Dashboard/Dashboard'
import Profile from './ui/views/pages/Profile/Profile'
import MyTracks from './ui/views/pages/MyTracks/MyTracks'
import MyPlaylists from './ui/views/pages/MyPlaylists/MyPlaylists'
import Favourites from './ui/views/pages/Favourites/Favourites'
import EditTrack from './ui/views/pages/EditTrack/EditTrack'
import PlaylistDetail from './ui/views/pages/PlaylistDetail/PlaylistDetail'
import { useNavigate } from 'react-router-dom'

import Layout from './ui/views/layout/Layout'

function App() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userName = useSelector((state) => state.user)

  useEffect(() => {
    const data = { userName: userName }
    let unsubscribeFromAuth = null

    unsubscribeFromAuth = onAuthStateChanged((user) => {
      if (user) {
        localStorage.setItem('authToken', user.Aa)
        dispatch(syncSignIn(data))
        if (userName) {
          dispatch(deleteUserName())
        }
      } else {
        localStorage.setItem('authToken', null)
        // navigate('/')
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
      <Route index path={ROUTES.AUTH} element={<Auth />} />
      <Route path={ROUTES.RESET_PASSWORD} element={<ResetPassword />} />
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        ></Route>

        <Route
          path={ROUTES.PROFILE}
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path={ROUTES.MY_TRACKS}
          element={
            <PrivateRoute>
              <MyTracks />
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
        <Route
          path={ROUTES.MY_PLAYLISTS}
          element={
            <PrivateRoute>
              <MyPlaylists />
            </PrivateRoute>
          }
        />
        <Route
          path={ROUTES.EDIT_TRACK}
          element={
            <PrivateRoute>
              <EditTrack />
            </PrivateRoute>
          }
        />
        <Route
          path={ROUTES.PLAYLIST_DETAIL}
          element={
            <PrivateRoute>
              <PlaylistDetail />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  )
}

export default App

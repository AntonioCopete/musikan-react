import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { LoginForm } from './Login.styles'

import {
  resetAuthState,
  signInWithEmailRequest,
  signUpWithGoogleRequest,
} from '../../../../../../redux/auth/actions'

import { authSelector } from '../../../../../../redux/auth/selectors'

function Login() {
  const dispatch = useDispatch()
  const { isSigningUp, signUpError, isAuthenticated } =
    useSelector(authSelector)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    dispatch(resetAuthState())
  }, [dispatch])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(signInWithEmailRequest(email, password))
    setEmail('')
    setPassword('')
  }

  const handleSetEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleSetPassword = (e) => {
    setPassword(e.target.value)
  }

  if (isAuthenticated) {
    return <Navigate to="/" />
  }

  return (
    <LoginForm onSubmit={handleSubmit} className="form__sign-in">
      <h2 className="form__title">Login to Musikan</h2>
      <div className="form__input-field">
        <i className="fas fa-envelope"></i>
        <input
          type="email"
          placeholder="Email"
          id="email"
          value={email}
          onChange={handleSetEmail}
        />
      </div>
      <div className="form__input-field">
        <i className="fas fa-lock"></i>
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={handleSetPassword}
        />
      </div>
      <button className="form__submit" type="submit">
        signup
      </button>

      <p className="form__social-text">Or Sign up with social platforms</p>
      {/* <SocialMediaAuth /> */}
      {signUpError && <p>{signUpError}</p>}
    </LoginForm>
  )
}

export default Login

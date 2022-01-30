import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { FormGroup } from '../Form.styles'
import Logo from '../../Logo/Logo'
import { Button } from '../../../../styles/GlobalComponents/Button'
import { NavLink } from '../../../../styles/GlobalComponents/NavLink'
import '../SocialMediaAuth.scss'

import {
  resetAuthState,
  signInWithEmailRequest,
  signUpWithGoogleRequest,
} from '../../../../../redux/auth/actions'

import { authSelector } from '../../../../../redux/auth/selectors'

function Login() {
  const dispatch = useDispatch()
  const { isSigningUp, signUpError, isAuthenticated } =
    useSelector(authSelector)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    dispatch(resetAuthState())
    setEmail('')
    setPassword('')
  }, [dispatch])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(signInWithEmailRequest(email, password))
  }

  const handleLoginWithGoogle = (e) => {
    e.preventDefault()
    dispatch(signUpWithGoogleRequest())
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
    <FormGroup onSubmit={handleSubmit} className="form__sign-in">
      <Logo />
      <h1>Login</h1>
      {signUpError && <p>{signUpError}</p>}
      <div className="form__input-field">
        <i className="fas fa-envelope"></i>
        <input
          type="email"
          placeholder="Email"
          id="loginEmail"
          value={email}
          onChange={handleSetEmail}
        />
      </div>
      <div className="form__input-field">
        <i className="fas fa-lock"></i>
        <input
          type="password"
          placeholder="Password"
          id="loginPassword"
          value={password}
          onChange={handleSetPassword}
        />
      </div>
      <NavLink to="/reset-password">Forgot password?</NavLink>
      <Button primary type="submit">
        login
      </Button>

      <p className="form__social-text">Or Sign up with social platforms</p>
      <div className="form__social-media">
        <button
          className="form__social-icons"
          onClick={handleLoginWithGoogle}
          disabled={isSigningUp}
        >
          <i className="fab fa-google"></i>
        </button>
      </div>
    </FormGroup>
  )
}

export default Login

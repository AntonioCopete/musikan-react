import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { FormItem } from '../Form.styles'
import Logo from '../../Logo/Logo'
import { Button } from '../../../../styles/GlobalComponents/Button'
import { NavLink } from '../../../../styles/GlobalComponents/NavLink'

import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { FaEnvelope, FaLock, FaGoogle } from 'react-icons/fa'

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
  const [rememberEmail, setRememberEmail] = useState(true)

  const emailFieldRef = useRef()

  useEffect(() => {
    dispatch(resetAuthState())
    setEmail('')
    setPassword('')
  }, [dispatch])

  useEffect(() => {
    const userCredentials = localStorage.getItem('credentials')
      ? JSON.parse(localStorage.getItem('credentials'))
      : null
    emailFieldRef.current.value = userCredentials
    setEmail(userCredentials)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(signInWithEmailRequest(email, password))
    handleRememberEmail()
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

  const handleRememberEmailCheck = (e) => {
    setRememberEmail(e.target.checked)
  }

  const handleRememberEmail = () => {
    if (email !== '' && rememberEmail) {
      localStorage.setItem('credentials', JSON.stringify(email))
    }
    if (email !== '' && !rememberEmail) {
      localStorage.removeItem('credentials')
    }
  }

  if (isAuthenticated) {
    return <Navigate to="/" />
  }

  return (
    <FormItem onSubmit={handleSubmit} className="form__sign-in">
      <Logo />
      <h1>Login</h1>
      {signUpError && <p>{signUpError}</p>}
      <div className="form__input-field">
        <FaEnvelope />
        <input
          type="email"
          placeholder="Email"
          id="loginEmail"
          ref={emailFieldRef}
          // value={email}
          onChange={handleSetEmail}
        />
      </div>
      <div className="form__input-field">
        <FaLock />
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

      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={rememberEmail}
              onChange={handleRememberEmailCheck}
            />
          }
          label="Remember email"
        />
      </FormGroup>

      <p className="form__social-text">Or Sign up with social platforms</p>
      <div className="form__social-media">
        <button
          className="form__social-icons"
          onClick={handleLoginWithGoogle}
          disabled={isSigningUp}
        >
          <FaGoogle />
        </button>
      </div>
    </FormItem>
  )
}

export default Login

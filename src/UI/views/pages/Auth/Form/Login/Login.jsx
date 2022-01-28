import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { FormGroup } from '../Form.styles'
import '../../SocialMediaAuth/SocialMediaAuth.scss'

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
      <h2 className="form__title">Login to Musikan</h2>
      {signUpError && <p>{signUpError}</p>}
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
        login
      </button>

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

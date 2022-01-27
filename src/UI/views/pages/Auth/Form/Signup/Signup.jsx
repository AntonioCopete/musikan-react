import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SignupForm } from './Signup.styles'
import {
  resetAuthState,
  signUpWithEmailRequest,
  signUpWithGoogleRequest,
} from '../../../../../../redux/auth/actions'
import { authSelector } from '../../../../../../redux/auth/selectors'

function Signup() {
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
    dispatch(signUpWithEmailRequest(email, password))
    console.log('sending form...')
  }

  const handleSetEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleSetPassword = (e) => {
    setPassword(e.target.value)
  }
  return (
    <SignupForm onSubmit={handleSubmit} className="form__sign-up">
      <h2 className="form__title">Create account</h2>
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
    </SignupForm>
  )
}

export default Signup

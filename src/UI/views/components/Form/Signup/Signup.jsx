import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { FormItem } from '../Form.styles'
import { FaUser, FaEnvelope, FaLock, FaGoogle } from 'react-icons/fa'

import Logo from '../../Logo/Logo'
import { Button } from '../../../../styles/GlobalComponents/Button'
import { InputGroup } from '../../../../styles/GlobalComponents/Input'
import {
  resetAuthState,
  signUpWithEmailRequest,
  signUpWithGoogleRequest,
} from '../../../../../redux/auth/actions'
import { setUserName } from '../../../../../redux/user/actions'
import { authSelector } from '../../../../../redux/auth/selectors'

function Signup() {
  const userNameRef = useRef()
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

  const handleLoginWithGoogle = (e) => {
    e.preventDefault()
    dispatch(signUpWithGoogleRequest())
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setUserName({ userName: userNameRef.current.value }))
    localStorage.setItem('userName', userNameRef.current.value)
    dispatch(signUpWithEmailRequest(email, password))
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
    <FormItem onSubmit={handleSubmit} className="form__sign-up">
      <Logo />
      <h1>Create account</h1>
      {signUpError && <p>{signUpError}</p>}

      <InputGroup>
        <FaUser />
        <input type="text" placeholder="Name" id="name" ref={userNameRef} />
      </InputGroup>
      <InputGroup>
        <FaEnvelope />
        <input
          type="email"
          placeholder="Email"
          id="signupEmail"
          value={email}
          onChange={handleSetEmail}
        />
      </InputGroup>
      <InputGroup>
        <FaLock />
        <input
          type="password"
          placeholder="Password"
          id="signupPassword"
          value={password}
          onChange={handleSetPassword}
        />
      </InputGroup>

      <Button primary type="submit" disabled={isSigningUp}>
        signup
      </Button>

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

export default Signup

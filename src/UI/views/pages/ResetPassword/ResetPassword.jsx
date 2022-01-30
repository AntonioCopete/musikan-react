import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  sendPasswordResetEmail,
  resetAuthState,
} from '../../../../redux/auth/actions'
import { authSelector } from '../../../../redux/auth/selectors'

import { FormItem } from '../../components/Form/Form.styles'
import Logo from '../../components/Logo/Logo'
import { Button } from '../../../styles/GlobalComponents/Button'
import { NavLink } from '../../../styles/GlobalComponents/NavLink'
import { Reset } from './ResetPassword.styles'

function ResetPassword() {
  const dispatch = useDispatch()
  const { isSendingPasswordReset, passwordResetError, passwordResetSent } =
    useSelector(authSelector)

  const [email, setEmail] = useState('')

  useEffect(() => {
    dispatch(resetAuthState())
  }, [dispatch])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(sendPasswordResetEmail(email))
    setEmail('')
  }

  const handleSetEmail = (e) => {
    setEmail(e.target.value)
  }

  function buttonText(loading, sent, error) {
    if (loading) return 'Sending...'
    if (sent) return 'Email Sent!'
    if (error) return 'Error'
    return 'Reset password'
  }

  return (
    <Reset>
      <Logo />
      <FormItem onSubmit={handleSubmit} className="form__sign-in">
        <h1>Recover password</h1>
        {passwordResetError && <p>{passwordResetError}</p>}

        <div className="form__input-field">
          <i className="fas fa-envelope"></i>
          <input
            type="email"
            placeholder="Email"
            id="resetEmail"
            value={email}
            onChange={handleSetEmail}
          />
        </div>
        <Button
          primary
          type="submit"
          disabled={
            isSendingPasswordReset || passwordResetSent || passwordResetError
          }
        >
          {buttonText(
            isSendingPasswordReset,
            passwordResetSent,
            passwordResetError
          )}
        </Button>
        <NavLink to="/auth">Login</NavLink>
      </FormItem>
    </Reset>
  )
}

export default ResetPassword

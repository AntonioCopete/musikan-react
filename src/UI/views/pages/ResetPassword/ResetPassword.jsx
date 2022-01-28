import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  sendPasswordResetEmail,
  resetAuthState,
} from '../../../../redux/auth/actions'
import { authSelector } from '../../../../redux/auth/selectors'

import { Link } from 'react-router-dom'
import { FormGroup } from '../Auth/Form/Form.styles'

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

  function buttonText(loading, sent) {
    if (loading) return 'Sending...'
    if (sent) return 'Email Sent!'
    return 'Reset password'
  }

  return (
    <main>
      <FormGroup onSubmit={handleSubmit} className="form__sign-in">
        <h2 className="form__title">Recover password</h2>
        {passwordResetError && <p>{passwordResetError}</p>}

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
        <button
          className="form__submit"
          type="submit"
          disabled={isSendingPasswordReset || passwordResetSent}
        >
          {buttonText(isSendingPasswordReset, passwordResetSent)}
        </button>
        <Link to="/auth">Login</Link>
      </FormGroup>
    </main>
  )
}

export default ResetPassword

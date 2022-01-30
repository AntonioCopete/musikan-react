import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { updateUserInfo } from '../../../../redux/auth/actions'

import { InputGroup } from '../../../styles/GlobalComponents/Input'
import { Button } from '../../../styles/GlobalComponents/Button'
import { ButtonLink } from '../../../styles/GlobalComponents/NavLink'
import { FormProfile } from './ProfileForm.styles'

function ProfileForm() {
  const { userName, email } = useSelector((state) => state.auth.currentUser)
  const [userDifference, setUserDifference] = useState()
  const navigate = useNavigate()
  const userNameInput = useRef()
  const emailInput = useRef()
  const oldPasswordRef = useRef()
  const newPasswordRef = useRef()
  const confirmPasswordRef = useRef()
  const dispatch = useDispatch()

  useEffect(() => {
    if (userDifference === null) return

    dispatch(updateUserInfo(userDifference))
    setUserDifference(null)
  }, [dispatch, userDifference])

  const handleSubmit = (e) => {
    e.preventDefault()

    const newUserName = userNameInput.current.value
    const newEmail = emailInput.current.value
    const newPassword = newPasswordRef.current.value
    const oldPassword = oldPasswordRef.current.value
    const confirmPassword = confirmPasswordRef.current.value

    if (
      (newUserName !== userName && newUserName !== '') ||
      (newEmail !== email && newEmail !== '') ||
      (oldPassword !== '' &&
        oldPassword.length >= 6 &&
        newPassword === confirmPassword &&
        newPassword !== oldPassword)
    ) {
      const changes = {}
      if (newUserName !== userName) {
        changes.userName = newUserName
      }
      if (newEmail !== email) {
        changes.email = newEmail
      }
      if (oldPassword !== '') {
        changes.password = newPassword
      }
      setUserDifference(changes)
    }
  }

  return (
    <FormProfile onSubmit={handleSubmit}>
      <h2>Edit profile</h2>
      <InputGroup>
        <i className="fas fa-user"></i>
        <input
          type="text"
          defaultValue={userName}
          ref={userNameInput}
          placeholder={userName}
        />
      </InputGroup>
      <InputGroup>
        <i className="fas fa-envelope"></i>
        <input type="email" defaultValue={email} ref={emailInput} />
      </InputGroup>
      <h2>Change password</h2>
      <InputGroup>
        <i className="fas fa-lock"></i>
        <input
          type="password"
          ref={oldPasswordRef}
          placeholder="Old password"
        />
      </InputGroup>
      <InputGroup>
        <i className="fas fa-lock"></i>
        <input
          type="password"
          ref={newPasswordRef}
          placeholder="New password"
        />
      </InputGroup>
      <InputGroup>
        <i className="fas fa-lock"></i>
        <input
          type="password"
          ref={confirmPasswordRef}
          placeholder="Confirm password"
        />
      </InputGroup>
      <Button primary type="submit">
        Save
      </Button>
      <ButtonLink
        onClick={() => {
          navigate(-1)
        }}
      >
        Cancel
      </ButtonLink>
    </FormProfile>
  )
}

export default ProfileForm

import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { signOut } from '../../../../redux/auth/actions'

import { UserMenuNav, UserMenuElement } from './UserMenu.styles'
import { deleteUserName } from '../../../../redux/user/actions'

function UserMenu() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogout = async () => {
    await dispatch(signOut())
    dispatch(deleteUserName())
    navigate('/auth')
  }

  return (
    <UserMenuNav>
      <ul>
        <UserMenuElement>
          <Link to="/profile">Profile</Link>
        </UserMenuElement>
        <UserMenuElement>
          <span onClick={handleLogout}>Logout</span>
        </UserMenuElement>
      </ul>
    </UserMenuNav>
  )
}

export default UserMenu
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteUserName } from '../../../../redux/user/actions'
import { signOut } from '../../../../redux/auth/actions'
import * as ROUTES from '../../../../routes/routes'

import {
  NavigateLink,
  ButtonLink,
} from '../../../styles/GlobalComponents/NavLink'
import { UserMenuNav, UserMenuElement } from './UserMenu.styles'

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
          <NavigateLink to={ROUTES.PROFILE}>Profile</NavigateLink>
        </UserMenuElement>
        <UserMenuElement>
          <ButtonLink onClick={handleLogout}>Logout</ButtonLink>
        </UserMenuElement>
      </ul>
    </UserMenuNav>
  )
}

export default UserMenu

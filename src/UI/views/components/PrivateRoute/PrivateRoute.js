import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { authSelector } from '../../../../redux/auth/selectors'

function PrivateRoute({ children, ...rest }) {
  const { isAuthenticated } = useSelector(authSelector)

  return isAuthenticated ? children : <Navigate to="/auth" />
}

export default PrivateRoute

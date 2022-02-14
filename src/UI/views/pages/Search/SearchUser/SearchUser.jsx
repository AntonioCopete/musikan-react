import UserItem from '../../../components/UserItem/UserItem'
import { UserWrapper } from './SearchUser.styles'

function SearchUser({ users }) {
  return (
    <UserWrapper>
      {users?.length > 0 ? (
        users.map((item) => (
          <UserItem
            id={item.id}
            user={item.userName}
            thumbnail={item.thumbnail}
          />
        ))
      ) : (
        <p>No users</p>
      )}
    </UserWrapper>
  )
}

export default SearchUser

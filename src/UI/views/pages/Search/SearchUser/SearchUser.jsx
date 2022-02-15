import UserItem from '../../../components/UserItem/UserItem'
import { UserWrapper } from './SearchUser.styles'

function SearchUser({ users }) {
  return (
    <UserWrapper>
      {users?.length > 0 ? (
        users.map((item) => (
          <UserItem
            key={item._id}
            id={item._id}
            user={item.userName}
            thumbnail={item.profilePicture}
          />
        ))
      ) : (
        <p>No users</p>
      )}
    </UserWrapper>
  )
}

export default SearchUser

import { ItemWrapper, ItemContent, ItemText } from './UserItem.styles'

function UserItem({ id, user, thumbnail }) {
  return (
    <ItemWrapper to={`/user/${id}`}>
      <ItemContent bgImage={thumbnail} />
      <ItemText>{user}</ItemText>
    </ItemWrapper>
  )
}

export default UserItem

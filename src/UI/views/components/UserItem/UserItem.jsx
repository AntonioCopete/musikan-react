import { ItemWrapper, ItemContent, Footer } from './UserItem.styles'

function UserItem({ id, user, thumbnail }) {
  return (
    <ItemWrapper to={`/user/${id}`}>
      <ItemContent bgImage={thumbnail} />
      <Footer>
        <span>{user}</span>
      </Footer>
    </ItemWrapper>
  )
}

export default UserItem

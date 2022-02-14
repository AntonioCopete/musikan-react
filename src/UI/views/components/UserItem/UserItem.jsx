import { useSelector } from 'react-redux'

import { NavigateLink } from '../../../styles/GlobalComponents/NavLink'

import { ItemWrapper, ItemContent, Footer } from './UserItem.styles'

function UserItem({ name, thumbnail }) {
  return (
    <ItemWrapper>
      <ItemContent bgImage={thumbnail} />
      <Footer>
        <span>{name}</span>
      </Footer>
    </ItemWrapper>
  )
}

export default UserItem

import { NavigateLink } from '../../../styles/GlobalComponents/NavLink'

import {
  ItemWrapper,
  ItemContent,
  Icon,
  Text,
  Image,
} from './PlaylistItem.styles'

function PlaylistItem({ name, thumbnail, id }) {
  return (
    <ItemWrapper>
      <ItemContent>
        <Image src={thumbnail} alt={name} />
        <NavigateLink to={`/playlist/${id}`}>
          <Icon />
        </NavigateLink>
      </ItemContent>
      <Text>{name}</Text>
    </ItemWrapper>
  )
}

export default PlaylistItem

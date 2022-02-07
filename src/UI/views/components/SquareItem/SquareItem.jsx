import { NavigateLink } from '../../../styles/GlobalComponents/NavLink'
import * as ROUTES from '../../../../routes/routes'
import {
  ItemWrapper,
  ItemContent,
  Icon,
  Text,
  Image,
} from './SquareItem.styles'
import { useSelector } from 'react-redux'

function SquareItem() {
  const { name, thumbnail, _id } = useSelector((state) => state.currentTrack)

  return (
    <ItemWrapper>
      <ItemContent>
        <Image src={thumbnail} alt={name} />
        <NavigateLink to={ROUTES.PLAYLIST_DETAIL}>
          <Icon />
        </NavigateLink>
      </ItemContent>
      <Text>{name}</Text>
    </ItemWrapper>
  )
}

export default SquareItem

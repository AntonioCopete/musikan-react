import { useSelector } from 'react-redux'

import { NavigateLink } from '../../../styles/GlobalComponents/NavLink'
import FollowItem from '../FollowItem/FollowItem'
import {
  ItemWrapper,
  ItemContent,
  Icon,
  Text,
  Footer,
} from './PlaylistItem.styles'

function PlaylistItem({
  name,
  thumbnail,
  id,
  followed,
  reload,
  showFollow,
  isOwner,
}) {
  const { _id } = useSelector((state) => state.auth.currentUser)

  return (
    <ItemWrapper>
      <ItemContent bgImage={thumbnail}>
        <NavigateLink to={`/playlist/${id}`}>
          <Icon />
        </NavigateLink>
      </ItemContent>
      <Footer>
        <Text>{name}</Text>
        {(followed || (showFollow && !isOwner)) && (
          <FollowItem
            reload={reload}
            userId={_id}
            id={id}
            initialState={followed}
          />
        )}
      </Footer>
    </ItemWrapper>
  )
}

export default PlaylistItem

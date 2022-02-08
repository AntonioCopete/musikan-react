import { useState } from 'react'

import { NavigateLink } from '../../../styles/GlobalComponents/NavLink'
import {
  ItemWrapper,
  ItemContent,
  Icon,
  Text,
  CheckFavourite,
  Footer,
} from './PlaylistItem.styles'
import { FaBookmark, FaRegBookmark } from 'react-icons/fa'

function PlaylistItem({ name, thumbnail, id }) {
  const [follow, setFollow] = useState(false)

  const handleClick = () => {
    setFollow(!follow)
  }

  return (
    <ItemWrapper>
      <ItemContent bgImage={thumbnail}>
        <NavigateLink to={`/playlist/${id}`}>
          <Icon />
        </NavigateLink>
      </ItemContent>
      <Footer>
        <Text>{name}</Text>
        <CheckFavourite onClick={handleClick}>
          {follow ? <FaRegBookmark /> : <FaBookmark />}
        </CheckFavourite>
      </Footer>
    </ItemWrapper>
  )
}

export default PlaylistItem

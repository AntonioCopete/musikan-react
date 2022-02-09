import { useState } from 'react'
import { useSelector } from 'react-redux'
import api from '../../../../api'

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

function PlaylistItem({ name, thumbnail, id, followed, reload }) {
  const { _id } = useSelector((state) => state.auth.currentUser)
  const [follow, setFollow] = useState(false)

  const handleClick = async () => {
    const response = await api.followPlaylist({ _id: _id }, id)
    setFollow(response.data.data.followed)
    reload()
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
        {followed && (
          <CheckFavourite onClick={handleClick}>
            {follow ? <FaRegBookmark /> : <FaBookmark />}
          </CheckFavourite>
        )}
      </Footer>
    </ItemWrapper>
  )
}

export default PlaylistItem

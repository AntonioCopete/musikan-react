import { useEffect, useState } from 'react'
import api from '../../../../api'
import { CheckFavourite } from './FollowItem.styles'
import { FaBookmark, FaRegBookmark } from 'react-icons/fa'

function FollowItem({ initialState, userId, id, reload }) {
  const [follow, setFollow] = useState(initialState)

  useEffect(() => {
    setFollow(initialState)
  }, [initialState])

  const handleClick = async () => {
    const response = await api.followPlaylist({ _id: userId }, id)
    setFollow(response.data.data.followed)
    if (reload) reload()
  }

  return (
    <CheckFavourite onClick={handleClick}>
      {follow ? <FaBookmark /> : <FaRegBookmark />}
    </CheckFavourite>
  )
}

export default FollowItem

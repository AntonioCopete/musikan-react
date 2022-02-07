import { useEffect, useState } from 'react'
import { RiHeart3Fill, RiHeart3Line } from 'react-icons/ri'

import { handleLike } from '../../../utils/handleLike'

import { CheckLikeItem } from './LikeDislike.styles'

function LikeDislike({ initialState, id, userId, isFavorites, reload }) {
  const [like, setLike] = useState()

  useEffect(() => {
    setLike(initialState)
  }, [initialState])

  const handleClick = async () => {
    const response = await handleLike(userId, id)
    setLike(response.data.data.like)
    if (isFavorites) {
      reload()
    }
  }

  return (
    <CheckLikeItem onClick={handleClick}>
      {!like ? <RiHeart3Line /> : <RiHeart3Fill />}
    </CheckLikeItem>
  )
}

export default LikeDislike

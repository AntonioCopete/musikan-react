import { useEffect, useState } from 'react'
import { RiHeart3Fill, RiHeart3Line } from 'react-icons/ri'

import { CheckLikeItem } from './LikeDislike.styles'

function LikeDislike({ initialState, handleLike, id }) {
  const [like, setLike] = useState()

  useEffect(() => {
    setLike(initialState)
  }, [initialState])

  const handleClick = () => {
    setLike(!like)
    handleLike(id)
  }

  return (
    <CheckLikeItem onClick={handleClick}>
      {!like ? <RiHeart3Line /> : <RiHeart3Fill />}
    </CheckLikeItem>
  )
}

export default LikeDislike

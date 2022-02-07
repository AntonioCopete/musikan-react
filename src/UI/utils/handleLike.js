import api from '../../api/api'

export const handleLike = async (userId, id) => {
  return await api.likeTrack(userId, id)
}

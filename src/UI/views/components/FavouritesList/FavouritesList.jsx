import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { getTracks } from '../../../../redux/track/actions'
import * as auth from '../../../../services/auth'
import api from '../../../../api/api'

import LikeDislike from '../LikeDislike/LikeDislike'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'

import { ItemText } from './MySongsList.styles'

function FavouritesList() {
  const dispatch = useDispatch()
  const tracks = useSelector((state) => state.track)

  useEffect(() => {
    dispatch(getTracks('liked'))
  }, [dispatch])

  const handleLike = (id) => {
    getCurrentTokenAndLike(id)
  }

  const getCurrentTokenAndLike = async (id) => {
    const token = await auth.getCurrentUserToken()
    const headers = { Authorization: `Bearer ${token}` }
    await api.likeTrack(headers, id)
    dispatch(getTracks('liked'))
  }

  return (
    <List dense sx={{ width: '100%' }}>
      {tracks.length > 0 &&
        tracks.map((value) => {
          const labelId = `checkbox-list-secondary-label-${value._id}`
          return (
            <ListItem
              key={value._id}
              secondaryAction={
                <LikeDislike
                  initialState={value.like}
                  handleLike={handleLike}
                  id={value._id}
                />
              }
            >
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                    alt={`Avatar n°${value + 1}`}
                    src={value.thumbnail}
                    variant="square"
                  />
                </ListItemAvatar>
                <ItemText>{value.name}</ItemText>
                <ItemText id={labelId} primary={`Song ${value.name}`} />
                <ItemText>{value.genre}</ItemText>
              </ListItemButton>
            </ListItem>
          )
        })}
    </List>
  )
}

export default FavouritesList

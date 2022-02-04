import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { getTracks } from '../../../../redux/track/actions'
import * as auth from '../../../../services/auth'
import api from '../../../../api/api'

import InfoMenu from '../InfoMenu/InfoMenu'
import LikeDislike from '../LikeDislike/LikeDislike'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'

import { ItemText } from './MySongsList.styles'

function MySongsList() {
  const dispatch = useDispatch()
  const tracks = useSelector((state) => state.track)

  useEffect(() => {
    dispatch(getTracks())
  }, [dispatch])

  const handleLike = (id) => {
    getCurrentTokenAndLike(id)
  }

  const getCurrentTokenAndLike = async (id) => {
    const token = await auth.getCurrentUserToken()
    const headers = { Authorization: `Bearer ${token}` }
    await api.likeTrack(headers, id)
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
                <ItemText id={labelId} primary={`Song ${value.name}`} />
                <ItemText>genre -{value.genre} </ItemText>
              </ListItemButton>
              <InfoMenu
                id={value._id}
                initialState={value.like}
                handleLike={handleLike}
              />
            </ListItem>
          )
        })}
    </List>
  )
}

export default MySongsList

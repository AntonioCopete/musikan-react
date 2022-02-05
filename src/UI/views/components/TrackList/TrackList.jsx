import LikeDislike from '../LikeDislike/LikeDislike'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import InfoMenu from '../InfoMenu/InfoMenu'
import { useDispatch } from 'react-redux'

import { ItemText } from './TrackList.styles'
import { getCurrentTrack } from '../../../../redux/currentTrack/actions'

function TrackList({ tracks, handleLike, owner }) {
  const dispatch = useDispatch()
  const handlePlay = (id) => {
    dispatch(getCurrentTrack(id))
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
              <ListItemButton onClick={() => handlePlay(value._id)}>
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
              {owner && <InfoMenu handleLike={handleLike} id={value._id} />}
            </ListItem>
          )
        })}
    </List>
  )
}

export default TrackList

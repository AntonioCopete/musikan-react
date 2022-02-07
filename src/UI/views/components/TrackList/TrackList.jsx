import { getCurrentTrack } from '../../../../redux/currentTrack/actions'

import LikeDislike from '../LikeDislike/LikeDislike'

import InfoMenu from '../InfoMenu/InfoMenu'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import { useDispatch, useSelector } from 'react-redux'

import { ItemText } from './TrackList.styles'

function TrackList({ tracks, owner, isFavorites, reload }) {
  const dispatch = useDispatch()
  const { _id } = useSelector((state) => state.auth.currentUser)
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
                  initialState={isFavorites ? true : value.like}
                  userId={_id}
                  id={value._id}
                  isFavorites={isFavorites}
                  reload={reload}
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
              {owner && <InfoMenu id={value._id} reload={reload} />}
            </ListItem>
          )
        })}
    </List>
  )
}

export default TrackList

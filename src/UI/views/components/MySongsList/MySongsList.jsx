import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getTracks } from '../../../../redux/track/actions'
// import { trackSelector } from '../../../../redux/track/selectors'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Checkbox from '@mui/material/Checkbox'
import Avatar from '@mui/material/Avatar'

function MySongsList() {
  const dispatch = useDispatch()
  const track = useSelector((state) => state.track)
  console.log(track)

  useEffect(() => {
    dispatch(getTracks())
  }, [dispatch])

  const [checked, setChecked] = useState([1])

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
  }

  return (
    <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {track &&
        track.map((value) => {
          const labelId = `checkbox-list-secondary-label-${value}`
          return (
            <ListItem
              key={value._id}
              secondaryAction={
                <Checkbox
                  edge="end"
                  onChange={handleToggle(value)}
                  checked={checked.indexOf(value) !== -1}
                  inputProps={{ 'aria-labelledby': labelId }}
                  sx={{ width: '50px' }}
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
                <ListItemText id={labelId} primary={`Song ${value.name}`} />
                <p>genre -{value.genre} </p>
              </ListItemButton>
            </ListItem>
          )
        })}
    </List>
  )
}

export default MySongsList

import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getTracks } from '../../../../redux/track/actions'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Checkbox from '@mui/material/Checkbox'
import Avatar from '@mui/material/Avatar'
import InfoMenu from '../InfoMenu/InfoMenu'
import { ItemText } from './MySongsList.styles'

function MySongsList() {
  const dispatch = useDispatch()
  const track = useSelector((state) => state.track)

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
    <List dense sx={{ width: '100%' }}>
      {track.length > 0 &&
        track.map((value) => {
          const labelId = `checkbox-list-secondary-label-${value._id}`
          return (
            <ListItem
              key={value._id}
              secondaryAction={
                <Checkbox
                  edge="end"
                  onChange={handleToggle(value)}
                  checked={checked.indexOf(value) !== -1}
                  inputProps={{ 'aria-labelledby': labelId }}
                  icon={<i className="fas fa-heart"></i>}
                  checkedIcon={<i className="fa fa-heart"></i>}
                  sx={{
                    color: 'white',
                    '&.Mui-checked': {
                      color: '#FD3568',
                    },
                  }}
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
                <ItemText>genre -{value.genre} </ItemText>
              </ListItemButton>
              <InfoMenu />
            </ListItem>
          )
        })}
    </List>
  )
}

export default MySongsList

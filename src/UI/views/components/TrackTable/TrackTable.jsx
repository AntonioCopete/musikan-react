import { getCurrentTrack } from '../../../../redux/currentTrack/actions'
import { useDispatch, useSelector } from 'react-redux'

import LikeDislike from '../LikeDislike/LikeDislike'
import InfoMenu from '../InfoMenu/InfoMenu'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemAvatar from '@mui/material/ListItemAvatar'

import Avatar from '@mui/material/Avatar'
import { ItemText, Table } from './TrackTable.styles'

function TrackList({ tracks, owner, isFavorites, reload }) {
  const dispatch = useDispatch()
  const { _id } = useSelector((state) => state.auth.currentUser)
  const handlePlay = (id) => {
    dispatch(getCurrentTrack(id))
  }

  return (
    <>
      <Table class="table">
        <div class="row header">
          <div class="cell">Name</div>
          <div class="cell">Age</div>
          <div class="cell">Occupation</div>
          <div class="cell">Location</div>
        </div>

        <div class="row">
          <div class="cell" data-title="Name">
            Luke Peters
          </div>
          <div class="cell" data-title="Age">
            25
          </div>
          <div class="cell" data-title="Occupation">
            Freelance Web Developer
          </div>
          <div class="cell" data-title="Location">
            Brookline, MA
          </div>
        </div>

        <div class="row">
          <div class="cell" data-title="Name">
            Joseph Smith
          </div>
          <div class="cell" data-title="Age">
            27
          </div>
          <div class="cell" data-title="Occupation">
            Project Manager
          </div>
          <div class="cell" data-title="Location">
            Somerville, MA
          </div>
        </div>

        <div class="row">
          <div class="cell" data-title="Name">
            Maxwell Johnson
          </div>
          <div class="cell" data-title="Age">
            26
          </div>
          <div class="cell" data-title="Occupation">
            UX Architect & Designer
          </div>
          <div class="cell" data-title="Location">
            Arlington, MA
          </div>
        </div>

        <div class="row">
          <div class="cell" data-title="Name">
            Harry Harrison
          </div>
          <div class="cell" data-title="Age">
            25
          </div>
          <div class="cell" data-title="Occupation">
            Front-End Developer
          </div>
          <div class="cell" data-title="Location">
            Boston, MA
          </div>
        </div>
      </Table>
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
    </>
  )
}

export default TrackList

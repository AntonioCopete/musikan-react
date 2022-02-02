import { useState } from 'react'
// import { useSelector } from 'react-redux'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import { IconOpen, Item } from './InfoMenu.styles'

const ITEM_HEIGHT = 48

function InfoMenu({ id }) {
  // const track = useSelector((state) => state.track)
  // console.log(track)

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleDelete = () => {
    console.log(id)
  }

  return (
    <section>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <IconOpen className="fas fa-chevron-down"></IconOpen>
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            background: '#474747',
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20rem',
            color: 'white',
          },
        }}
      >
        {/* {track && track.map((item) => <p>{item._id}</p>)} */}
        <Item>
          <span>Like</span>
          <i className="fas fa-heart"></i>
        </Item>
        <Item>
          <span>Edit</span>
          <i className="fas fa-pen"></i>
        </Item>
        <Item onClick={handleDelete}>
          <span>Delete</span>
          <i className="fas fa-trash"></i>
          {/* <span>{track._id}</span> */}
        </Item>
      </Menu>
    </section>
  )
}

export default InfoMenu

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTracks } from '../../../../redux/track/actions'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import { IconOpen, Item } from './InfoMenu.styles'
import { RiHeart3Fill, RiPencilFill, RiDeleteBinFill } from 'react-icons/ri'

function InfoMenu({ id }) {
  const dispatch = useDispatch()

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleDelete = () => {
    dispatch(deleteTracks(id))
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
        <IconOpen />
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
            maxHeight: 48 * 4.5,
            width: '20rem',
            color: 'white',
          },
        }}
      >
        <Item>
          <span>Like</span>
          <RiHeart3Fill />
        </Item>
        <Item>
          <span>Edit</span>
          <RiPencilFill />
        </Item>
        <Item onClick={handleDelete}>
          <span>Delete</span>
          <RiDeleteBinFill />
        </Item>
      </Menu>
    </section>
  )
}

export default InfoMenu

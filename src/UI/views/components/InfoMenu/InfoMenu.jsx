import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import api from '../../../../api'

import { handleLike } from '../../../utils/handleLike'

import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import { IconOpen, Item } from './InfoMenu.styles'
import { RiHeart3Fill, RiPencilFill, RiDeleteBinFill } from 'react-icons/ri'

function InfoMenu({ id, reload }) {
  const navigate = useNavigate()

  const { _id } = useSelector((state) => state.auth.currentUser)

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLikeInMenu = () => {
    handleLike(_id, id)
    reload()
    setAnchorEl(null)
  }

  const handleEdit = () => {
    navigate(`../edit-song/${id}`)
  }

  const handleDelete = async () => {
    await api.deleteTrack({ _id: _id }, id)
    reload()
  }

  return (
    <>
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
            width: '15rem',
            color: 'white',
          },
        }}
      >
        <Item onClick={handleLikeInMenu}>
          <span>Like</span>
          <RiHeart3Fill />
        </Item>
        <Item onClick={handleEdit}>
          <span>Edit</span>
          <RiPencilFill />
        </Item>
        <Item onClick={handleDelete}>
          <span>Delete</span>
          <RiDeleteBinFill />
        </Item>
      </Menu>
    </>
  )
}

export default InfoMenu

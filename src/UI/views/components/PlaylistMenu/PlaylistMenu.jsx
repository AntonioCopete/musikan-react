import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import api from '../../../../api'

import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import { IconOpen, Item } from './PlaylistMenu.styles'
import {
  RiPencilFill,
  RiShareCircleLine,
  RiDeleteBinFill,
} from 'react-icons/ri'

function PlaylistMenu({ playlistId, owner }) {
  const { _id } = useSelector((state) => state.auth.currentUser)
  const { id } = useParams()
  const navigate = useNavigate()
  const [shareMessage, setShareMessage] = useState('Share')
  const [anchorEl, setAnchorEl] = useState(null)

  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleEdit = () => {
    navigate(`../edit-playlist/${id}`)
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
    setShareMessage('Link in your clipboard')
    setTimeout(() => {
      setAnchorEl(null)
      setShareMessage('Share')
    }, 1500)
  }

  const handleDelete = async () => {
    const response = await api.deletePlaylist({ _id: _id }, playlistId)
    if (response.data.success) {
      navigate(-1)
    } else {
      console.log('Something went wrong')
    }
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
        {owner && (
          <Item onClick={handleEdit}>
            <span>Edit</span>
            <RiPencilFill />
          </Item>
        )}
        <Item onClick={handleShare}>
          <span>{shareMessage}</span>
          <RiShareCircleLine />
        </Item>
        {owner && (
          <Item onClick={handleDelete}>
            <span>Delete</span>
            <RiDeleteBinFill />
          </Item>
        )}
      </Menu>
    </>
  )
}

export default PlaylistMenu

import { useState } from 'react'

import UserAvatar from '../UserAvatar/UserAvatar'
import UserMenu from '../UserMenu/UserMenu'
import UploadSongModal from "../UploadSongModal/UploadSongModal"
import BasicModalContainer from '../BasicModalContainer/BasicModalContainer'

import { HeaderWrapper } from './MySongsHeader.styles'

function MySongsHeader() {
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <HeaderWrapper>
      <UserAvatar
        showUserMenu={showUserMenu}
        setShowUserMenu={setShowUserMenu}
      />
      {showUserMenu && <UserMenu />}
      <h1>My Songs</h1>
      <BasicModalContainer
        open={open}
        setOpen={setOpen}
        handleOpen={handleOpen}
        handleClose={handleClose}
        content={<UploadSongModal handleClose={handleClose} />}
        btnText={"Upload modal"} type={"button"} />
    </HeaderWrapper>
  )
}

export default MySongsHeader

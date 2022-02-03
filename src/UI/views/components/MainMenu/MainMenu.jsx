import { NavLink } from '../../../styles/GlobalComponents/NavLink'
import { Menu } from './MainMenu.styles'
import { useState } from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import IconMenu from './MainMenuWeb'
import { RiHome2Fill, RiMusicFill, RiHeart3Fill } from 'react-icons/ri'
import { BsPlusSquare } from 'react-icons/bs'

export default function MainMenu() {
  const [value, setValue] = useState('dashboard')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <IconMenu />
      <Menu>
        <BottomNavigation
          value={value}
          onChange={handleChange}
          sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            background: '#000',
          }}
          elevation={3}
        >
          <BottomNavigationAction
            label="Dashboard"
            value="dashboard"
            icon={<RiHome2Fill />}
            component={NavLink}
            to="/"
          />
          <BottomNavigationAction
            label="My songs"
            value="songs"
            icon={<RiMusicFill />}
            component={NavLink}
            to="/my-songs"
          />
          <BottomNavigationAction
            label="Favourites"
            value="favourites"
            icon={<RiHeart3Fill />}
            component={NavLink}
            to="/favourites"
          />
          <BottomNavigationAction
            label="Upload"
            value="upload"
            icon={<BsPlusSquare />}
            component={NavLink}
            to="/profile"
          />
        </BottomNavigation>
      </Menu>
    </>
  )
}

import { NavLink } from '../../../styles/GlobalComponents/NavLink'
import { Menu } from './MainMenu.styles'
import { useState } from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import IconMenu from './MainMenuWeb'

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
            icon={<i className="fas fa-envelope"></i>}
            component={NavLink}
            to="/"
          />

          <BottomNavigationAction
            label="Profile"
            value="profile"
            icon={<i className="fas fa-user"></i>}
            component={NavLink}
            to="/profile"
          />

          <BottomNavigationAction
            label="My songs"
            value="songs"
            icon={<i className="fas fa-music"></i>}
            component={NavLink}
            to="/my-songs"
          />
          <BottomNavigationAction
            label="Upload"
            value="upload"
            icon={<i className="fas fa-plus"></i>}
            component={NavLink}
            to="/profile"
          />
          <BottomNavigationAction
            label="Favourites"
            value="favourites"
            icon={<i className="fas fa-heart"></i>}
            component={NavLink}
            to="/profile"
          />
        </BottomNavigation>
      </Menu>
    </>
  )
}

import { NavLink } from '../../../styles/GlobalComponents/NavLink'
import Logo from '../Logo/Logo'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import { MenuWeb } from './MainMenuWeb.styles'

export default function IconMenu() {
  return (
    <MenuWeb>
      <Logo main />
      <MenuList>
        <MenuItem component={NavLink} to="/">
          <i className="fas fa-envelope"></i>
          <ListItemText>Dashboard</ListItemText>
        </MenuItem>
        <MenuItem component={NavLink} to="/profile">
          <i className="fas fa-user"></i>
          <ListItemText>Profile</ListItemText>
        </MenuItem>
        <MenuItem component={NavLink} to="/my-songs">
          <i className="fas fa-music"></i>
          <ListItemText>My song</ListItemText>
        </MenuItem>
        <MenuItem component={NavLink} to="/profile">
          <i className="fas fa-heart"></i>
          <ListItemText>Favourites</ListItemText>
        </MenuItem>
        <MenuItem component={NavLink} to="/profile">
          <i className="fas fa-plus"></i>
          <ListItemText>Upload</ListItemText>
        </MenuItem>
      </MenuList>
    </MenuWeb>
  )
}

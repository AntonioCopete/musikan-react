import { NavLink } from '../../../styles/GlobalComponents/NavLink'
import Logo from '../Logo/Logo'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import { MenuWeb } from './MainMenuWeb.styles'
import { RiHome2Fill, RiMusicFill, RiHeart3Fill } from 'react-icons/ri'
import { BsPlusSquare } from 'react-icons/bs'

export default function IconMenu() {
  return (
    <MenuWeb>
      <Logo main />
      <MenuList>
        <MenuItem component={NavLink} to="/">
          <RiHome2Fill />
          <ListItemText>Dashboard</ListItemText>
        </MenuItem>
        <MenuItem component={NavLink} to="/my-songs">
          <RiMusicFill />
          <ListItemText>My songs</ListItemText>
        </MenuItem>
        <MenuItem component={NavLink} to="/favourites">
          <RiHeart3Fill />
          <ListItemText>Favourites</ListItemText>
        </MenuItem>
        <MenuItem component={NavLink} to="/">
          <BsPlusSquare />
          <ListItemText>Upload</ListItemText>
        </MenuItem>
      </MenuList>
    </MenuWeb>
  )
}

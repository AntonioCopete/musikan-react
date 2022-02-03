import { MenuWrapper, MenuItem, MenuName, MenuList } from './MainMenu.styles'
import Logo from '../Logo/Logo'
import * as ROUTES from '../../../../routes/routes'
import { RiHome2Fill, RiMusicFill, RiHeart3Fill } from 'react-icons/ri'
import { BsPlusSquare } from 'react-icons/bs'

function MainMenu() {
  return (
    <MenuWrapper>
      <MenuList>
        <MenuItem brand to={ROUTES.DASHBOARD}>
          <Logo main />
        </MenuItem>
        <MenuItem to={ROUTES.DASHBOARD}>
          <RiHome2Fill />
          <MenuName>Dashboard</MenuName>
        </MenuItem>
        <MenuItem to={ROUTES.MY_SONGS}>
          <RiMusicFill />
          <MenuName>My Songs</MenuName>
        </MenuItem>
        <MenuItem to={ROUTES.FAVOURITES}>
          <RiHeart3Fill />
          <MenuName>Favourites</MenuName>
        </MenuItem>
        <MenuItem to={ROUTES.DASHBOARD}>
          <BsPlusSquare />
          <MenuName>Upload</MenuName>
        </MenuItem>
      </MenuList>
    </MenuWrapper>
  )
}

export default MainMenu

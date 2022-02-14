import {
  MenuWrapper,
  MenuItem,
  MenuName,
  MenuList,
  BrandItem,
} from './MainMenu.styles'
import Logo from '../Logo/Logo'
import * as ROUTES from '../../../../routes/routes'
import { RiHome2Fill, RiMusicFill, RiHeart3Fill } from 'react-icons/ri'
import { FaHeadphones, FaSearch } from 'react-icons/fa'

function MainMenu() {
  return (
    <MenuWrapper>
      <MenuList>
        <BrandItem to={ROUTES.DASHBOARD}>
          <Logo main />
        </BrandItem>
        <MenuItem to={ROUTES.DASHBOARD}>
          <RiHome2Fill />
          <MenuName>Dashboard</MenuName>
        </MenuItem>
        <MenuItem to={ROUTES.MY_TRACKS}>
          <RiMusicFill />
          <MenuName>My Tracks</MenuName>
        </MenuItem>
        <MenuItem to={ROUTES.MY_PLAYLISTS}>
          <FaHeadphones />
          <MenuName>My Playlists</MenuName>
        </MenuItem>
        <MenuItem to={ROUTES.FAVOURITES}>
          <RiHeart3Fill />
          <MenuName>Favourites</MenuName>
        </MenuItem>
        <MenuItem to={ROUTES.SEARCH}>
          <FaSearch />
          <MenuName>Search</MenuName>
        </MenuItem>
      </MenuList>
    </MenuWrapper>
  )
}

export default MainMenu

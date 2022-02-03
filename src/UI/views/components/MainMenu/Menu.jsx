import { MenuWrapper } from './Menu.styles'
import { NavLink } from '../../../styles/GlobalComponents/NavLink'
import * as ROUTES from '../../../../routes/routes'
import { RiHome2Fill, RiMusicFill, RiHeart3Fill } from 'react-icons/ri'
import { BsPlusSquare } from 'react-icons/bs'

import './Menu.scss'

function Menu() {
  return (
    <MenuWrapper>
      <div class="menu" id="menu">
        <ul class="menu-list">
          <li class="menu-item">
            <NavLink to={ROUTES.DASHBOARD}>
              <RiHome2Fill />
              <span class="menu-name">Dashboard</span>
            </NavLink>
          </li>
          <li class="menu-item">
            <NavLink to={ROUTES.MY_SONGS}>
              <RiMusicFill />
              <span class="menu-name">My Songs</span>
            </NavLink>
          </li>
          <li class="menu-item">
            <NavLink to={ROUTES.FAVOURITES}>
              <RiHeart3Fill />
              <span class="menu-name">Favourites</span>
            </NavLink>
          </li>
          <li class="menu-item">
            <NavLink to={ROUTES.DASHBOARD}>
              <BsPlusSquare />
              <span class="menu-name">Upload</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </MenuWrapper>
  )
}

export default Menu

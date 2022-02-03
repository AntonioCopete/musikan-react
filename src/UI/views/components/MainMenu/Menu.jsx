import { MenuWrapper } from './Menu.styles'
import './Menu.scss'
function Menu() {
  return (
    <MenuWrapper>
      <nav class="navbar container">
        <div class="menu" id="menu">
          <ul class="menu-list">
            <li class="menu-item">
              <a href="#" class="menu-link is-active">
                <i class="menu-icon ion-md-home"></i>
                <span class="menu-name">Home</span>
              </a>
            </li>
            <li class="menu-item">
              <a href="#" class="menu-link">
                <i class="menu-icon ion-md-search"></i>
                <span class="menu-name">Search</span>
              </a>
            </li>
            <li class="menu-item">
              <a href="#" class="menu-link">
                <i class="menu-icon ion-md-cart"></i>
                <span class="menu-name">Cart</span>
              </a>
            </li>
            <li class="menu-item">
              <a href="#" class="menu-link">
                <i class="menu-icon ion-md-heart"></i>
                <span class="menu-name">Favorite</span>
              </a>
            </li>
            <li class="menu-item">
              <a href="#" class="menu-link">
                <i class="menu-icon ion-md-contact"></i>
                <span class="menu-name">Account</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </MenuWrapper>
  )
}

export default Menu

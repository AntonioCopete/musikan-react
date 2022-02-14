import { useSelector } from 'react-redux'
import { NavigateLink } from '../../../../../styles/GlobalComponents/NavLink'

import { ItemWrapper, ItemContent, Footer } from './PopularUsers.styles'
import user1 from '../../../../../img/user1.png'
import user2 from '../../../../../img/user2.png'
import user3 from '../../../../../img/user3.png'

function PopularUsers() {
  const { userName, profilePicture } = useSelector(
    (state) => state.auth.currentUser
  )
  return (
    <>
      <NavigateLink to={'/user'}>
        <ItemWrapper>
          <ItemContent bgImage={profilePicture} />
          <Footer>
            <span>{userName}</span>
          </Footer>
        </ItemWrapper>
      </NavigateLink>
      <NavigateLink to={'/user'}>
        <ItemWrapper>
          <ItemContent bgImage={user1} />
          <Footer>
            <span>User 1</span>
          </Footer>
        </ItemWrapper>
      </NavigateLink>
      <NavigateLink to={'/user'}>
        <ItemWrapper>
          <ItemContent bgImage={user2} />
          <Footer>
            <span>User 2</span>
          </Footer>
        </ItemWrapper>
      </NavigateLink>
      <NavigateLink to={'/user'}>
        <ItemWrapper>
          <ItemContent bgImage={user3} />
          <Footer>
            <span>User 3</span>
          </Footer>
        </ItemWrapper>
      </NavigateLink>
    </>
  )
}

export default PopularUsers

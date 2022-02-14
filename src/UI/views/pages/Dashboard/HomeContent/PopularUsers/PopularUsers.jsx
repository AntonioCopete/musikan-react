import UserItem from '../../../../components/UserItem/UserItem'

import user1 from '../../../../../img/user1.png'
import user2 from '../../../../../img/user2.png'
import user3 from '../../../../../img/user3.png'

function PopularUsers() {
  return (
    <>
      <UserItem id={4} user={'Pepa'} thumbnail={user1} />
      <UserItem id={1} user={'Pepe'} thumbnail={user1} />
      <UserItem id={2} user={'Pepi'} thumbnail={user2} />
      <UserItem id={3} user={'Pepo'} thumbnail={user3} />
    </>
  )
}

export default PopularUsers

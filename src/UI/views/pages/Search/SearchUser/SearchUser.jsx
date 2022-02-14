import { useState, useEffect } from 'react'

import UserItem from '../../../components/UserItem/UserItem'
import { UserWrapper } from './SearchUser.styles'
import pic from '../../../../img/noImage.jpg'

const data = [
  { id: 1, userName: 'Pepe', thumbnail: pic },
  { id: 2, userName: 'Pepi', thumbnail: pic },
  { id: 3, userName: 'pepo', thumbnail: pic },
  { id: 4, userName: 'pepo', thumbnail: pic },
]

function SearchUser({}) {
  const [mock, setMock] = useState()

  useEffect(() => {
    setMock(data)
  }, [])

  return (
    <UserWrapper>
      {/* {users?.length > 0 ? (
        users.map((item) => (
          <UserItem
            id={item.id}
            user={item.userName}
            thumbnail={item.thumbnail}
          />
        ))
      ) : (
        <p>No users</p>
      )} */}
      {mock?.length > 0 ? (
        mock.map((item) => (
          <UserItem
            key={item.id}
            id={item.id}
            user={item.userName}
            thumbnail={item.thumbnail}
          />
        ))
      ) : (
        <p>No users</p>
      )}
    </UserWrapper>
  )
}

export default SearchUser

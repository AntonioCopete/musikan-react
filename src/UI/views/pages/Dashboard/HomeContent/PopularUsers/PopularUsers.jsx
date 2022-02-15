import { useEffect, useState } from 'react'

import api from '../../../../../../api/api'

import UserItem from '../../../../components/UserItem/UserItem'

function PopularUsers() {
  const [users, setUsers] = useState([])
  const amountUsersToDisplay = 4

  useEffect(() => {
    getRandomUsers()
  }, [])

  const getRandomUsers = async () => {
    const response = await api.getAllUsers()
    setUsers(response.data.data)
  }

  return (
    <>
      {users &&
        users?.map((user, index) => {
          if (index > amountUsersToDisplay) return <></>
          return (
            <UserItem
              key={user._id}
              id={user._id}
              user={user.userName}
              thumbnail={user.profilePicture}
            />
          )
        })}
    </>
  )
}

export default PopularUsers
